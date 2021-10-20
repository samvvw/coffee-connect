const mongoose = require('mongoose')
const validator = require('validator')


const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your full name"],
            minLength: 2,
            maxLength: 30,
        },
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
        },
        subject: {
            type: String,
            required: [true, 'Please input subject'],
            minLength: 2,
            maxLength: 50,

        },
        message: {
            type: String,
            required: [true, 'Please input your message'],
            minLength: 2,
            maxLength: 1000,
        }
    },
    {
        timestamps: true,
    }
)

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact