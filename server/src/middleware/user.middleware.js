const jwt = require('jsonwebtoken')
const formidable = require('formidable')
const User = require('../models/user.model')

exports.validateToken = async (req, res, next) => {
    try {
        if (!req.headers['content-type'].startsWith('multipart/form-data;')) {
            if (!req.body.token) {
                res.status(403).send('Forbidden access no token provided')
            }
            const currentUser = jwt.verify(
                req.body.token,
                process.env.JWT_SECRET
            )

            const userDb = await User.findById(currentUser.id)
            req.currentUser = userDb
            if (userDb) {
                next()
            } else {
                res.status(403).send('Access forbidden')
            }
        } else {
            const form = formidable({ multiples: true })

            form.parse(req, async (error, fields, files) => {
                try {
                    if (!fields.token) {
                        res.status(403).send(
                            'Forbidden access no token provided'
                        )
                    }

                    const currentUser = jwt.verify(
                        fields.token,
                        process.env.JWT_SECRET
                    )

                    const userDb = await User.findById(currentUser.id)
                    req.currentUser = userDb
                    req.body = fields
                    req.files = files
                    if (currentUser) {
                        next()
                    } else {
                        res.status(403).send('Access forbidden')
                    }
                } catch (error) {
                    console.log(error)
                    res.status(500).send(error)
                }
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}
