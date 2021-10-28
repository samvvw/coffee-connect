const jwt = require('jsonwebtoken')
const formidable = require('formidable')
const User = require('../models/user.model')

exports.validateToken = async (req, res, next) => {
    try {
        if (!req.headers['content-type'].startsWith('multipart/form-data;')) {
            const currentUser = jwt.verify(
                req.body.token,
                process.env.JWT_SECRET
            )

            const userDb = await User.findById(currentUser.id)
            req.currentUser = userDb
            if (userDb) {
                // console.log(req.currentUser.id)
                next()
            } else {
                res.status(403).send('Access forbidden')
            }
        } else {
            const form = formidable({ multiples: true })

            form.parse(req, async (error, fields, files) => {
                const currentUser = jwt.verify(
                    fields.token,
                    process.env.JWT_SECRET
                )

                req.currentUser = currentUser
                req.files = files
                if (currentUser) {
                    next()
                } else {
                    res.status(403).send('Access forbidden')
                }
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}
