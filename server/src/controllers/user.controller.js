const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

function createToken(user){
    return jwt.sign(user, process.env.JWT_SECRET)
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

        res.status(201).json({
            createUser,
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

exports.userSignIn = async (req, res) => {
    try {
        const { email, password } = req.body 

        //Check if PW from client is in DB 
        const user = await User.findOne({ email: email}).exec()
        if(!user){
            //if not in the db, send error msg
            res.status(404).json({ error: `${email} not found` })
        }

        //When PW from client is in DB, validate 
        const isPasswordValid = await user.validatePassword(password)
        
        //If validation fail, send error msg
        if(!isPasswordValid){
            res.status(401).json({ error: 'Password does not match'})
        } 

        //When validation is successful, give them token

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}