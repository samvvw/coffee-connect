const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please input your first name'],
            minLength: 2,
            maxLength: 15,
        },

        lastName: {
            type: String,
            required: [true, 'Please input your last name'],
            minLength: 2,
            maxLength: 15,
        },

        email: {
            type: String,
            required: [true, 'Please input your email'],
            validate: [
                {
                    //if the email passed the validation, it will return true
                    //if the email didn't pass the validation, it will goes to message
                    validator: function (email) {
                        return validator.isEmail(email)
                    },
                    messages: `Please input a valid email`,
                },

                {
                    //if the count returns 0 (=false), will return !false = true, and it passes the validation
                    //if the count returns 1 (=true), will return !true = false, and it fails the validation and return message
                    validator: async function (email) {
                        const exists =
                            await mongoose.models.User.countDocuments({ email })
                        return !exists
                    },

                    messages: (props) => `${props.value} already exist`,
                },
            ],
        },

        userName: {
            type: String,
            required: [true, 'Please input your user name'],
            minLength: 3,
            maxLength: 15,
        },

        password: {
            type: String,
            required: [true, 'Please input password'],
            minLength: 8,
        },

        userType: {
            type: String,
            required: [true, 'Please select user type'],
            enum: {
                values: ['farmer', 'consumer'],
                message: '{VALUE} is not supported',
            },
        },

        bookmarks: {
            type: [String],
        },

        farms: {
            type: [String],
        },
    },

    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema)
module.exports = User
