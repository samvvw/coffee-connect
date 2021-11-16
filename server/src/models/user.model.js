const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

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
                    message: `Please input a valid email`,
                },

                {
                    //if the count returns 0 (=false), will return !false = true, and it passes the validation
                    //if the count returns 1 (=true), will return !true = false, and it fails the validation and return message
                    validator: async function (email) {
                        const exists =
                            await mongoose.models.User.countDocuments({ email })
                        return !exists
                    },

                    message: (props) => `${props.value} already exist`,
                },
            ],
        },

        userName: {
            type: String,
            required: [true, 'Please input your user name'],
            minLength: 3,
            maxLength: 15,
        },

        profilePicture: {
            type: String,
            default: 'DefaultUrl',
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

        likes: {
            type: [String],
        },

    },

    {
        timestamps: true,
    }
)

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err)
        }

        this.password = hash
        next()
    })
})

userSchema.methods.validatePassword = function (password) {
    const passwordHash = this.password //password from database
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, isSame) => {
            if (err) {
                return reject(err)
            }
            resolve(isSame)
        })
    })
}

const User = mongoose.model('User', userSchema)
module.exports = User
