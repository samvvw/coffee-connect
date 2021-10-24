const fs = require('fs')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const { s3Client } = require('../config/s3Client')
const { PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3')
const formidable = require('formidable')

const BUCKET_NAME = process.env.AWS_BUCKET_NAME
const REGION = process.env.AWS_REGION

function createToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
    })
}

exports.userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, userName, password, userType } =
            req.body

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password,
            userType: userType,
        }
        const createUser = await User.create(data)

        //To issue token
        const payload = {
            id: createUser._id,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            userType: userType,
        }

        const token = createToken(payload)

        res.status(201).json({ token: token })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

exports.userSignIn = async (req, res) => {
    try {
        const { email, password } = req.body

        //Check if PW from client is in DB
        const user = await User.findOne({ email: email }).exec()
        if (!user) {
            //if not in the db, send error msg
            res.status(404).json({ error: `${email} not found` })
        }

        //When PW from client is in DB, validate
        const isPasswordValid = await user.validatePassword(password)

        //If validation fail, send error msg
        if (!isPasswordValid) {
            res.status(401).json({ error: 'Password does not match' })
        } else {
            //When validation is successful, give them token
            const {
                firstName,
                lastName,
                userName,
                _id,
                profilePicture,
                userType,
            } = user
            const payload = {
                id: _id,
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                profilePicture: profilePicture,
                userType: userType,
            }

            const token = createToken(payload)
            res.status(200).json({ token: token })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

exports.uploadProfilePicture = async (req, res) => {
    try {
        const fileName = `profile-picture/${req.files.profilePicture.name}`

        const filePath = req.files.profilePicture.path

        if (
            !/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
                req.files.profilePicture.name
            )
        ) {
            res.status(404).send('Wrong file format')
        } else {
            const fileStream = fs.createReadStream(filePath)

            const bucketParam = {
                Bucket: BUCKET_NAME,
                Key: fileName,
                Body: fileStream,
                ACL: 'public-read',
            }

            const uploadPicture = await s3Client.send(
                new PutObjectCommand(bucketParam)
            )
            const updateUrl = {
                profilePicture: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`,
            }

            const currentUser = await User.findOneAndUpdate(
                { _id: req.currentUser.id },
                updateUrl
            )

            const actualCurrentUser = await User.findById(req.currentUser.id)

            res.json(actualCurrentUser)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

exports.deleteProfilePicture = async (req, res, next) => {
    try {
        const currentUserDB = await User.findById(req.currentUser.id).exec()

        if (
            currentUserDB.profilePicture &&
            currentUserDB.profilePicture !== 'DefaultUrl'
        ) {
            const fileName = req.currentUser.profilePicture
                .split('/')
                .slice(-1)[0]
            const bucketParams = {
                Bucket: BUCKET_NAME,
                Key: fileName,
            }
            await s3Client.send(new DeleteObjectCommand(bucketParams))

            const updatedUser = await currentUserDB.updateOne({
                profilePicture: 'DefaultUrl',
            })
            if (req.method === 'PUT') {
                next()
            } else {
                res.json(updatedUser)
            }
        } else {
            res.status(404).send('No profile picture found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
