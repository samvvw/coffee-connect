const jwt = require('jsonwebtoken')
const formidable = require('formidable')

exports.validateToken = async (req, res, next) => {
    try {
        console.log(
            req.headers['content-type'].startsWith('multipart/form-data;')
        )
        if (!req.headers['content-type'].startsWith('multipart/form-data;')) {
            const currentUser = jwt.verify(
                req.body.token,
                process.env.JWT_SECRET
            )

            console.log(currentUser)
            req.currentUser = currentUser
            if (currentUser) {
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
