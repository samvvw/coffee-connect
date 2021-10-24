const NewsletterSubscription = require('../models/newsletterSubscription.model')

exports.createNewsletterSubscription = async (req, res) => {
    try {
        const { email } = req.body

        const data = { email: email }

        // we need to save logo in S3 to generate URL before saving data into MongoDB
        const createNewsletterSubscription =
            await NewsletterSubscription.create(data)
        res.status(201).json(createNewsletterSubscription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.getNewsletterSubscriptions = (req, res) => {
    NewsletterSubscription.find({})
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.getNewsletterSubscriptionById = (req, res) => {
    NewsletterSubscription.findOne({ _id: req.params.id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}
