const Contact = require('../models/contact.model')

exports.createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body

        // we need to save logo in S3 to generate URL before saving data into MongoDB
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }

        const createContact = await Contact.create(data)
        res.status(201).json(createContact)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
}

exports.getContacts = (req, res) => {
    Contact.find({}, { name: 1, email: 1, subject: 1, message: 1 })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ error: error })
        })
}

exports.getContactById = (req, res) => {
    Contact.findOne({ _id: req.params.id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ error: error })
        })
}
