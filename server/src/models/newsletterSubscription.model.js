const mongoose = require('mongoose')
const validator = require('validator')


const newsletterSubscriptionSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please input your email'],
            validate: [
                {
                    validator: function (email) {
                        return validator.isEmail(email)
                    },
                    messages: `Please input a valid email`,
                },
            ],
        }
    },
    {
        timestamps: true,
    }
)

const NewsletterSubscription = mongoose.model('NewsletterSubscription', newsletterSubscriptionSchema)
module.exports = NewsletterSubscription