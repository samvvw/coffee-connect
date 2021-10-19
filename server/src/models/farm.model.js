const mongoose = require('mongoose')
const validator = require('validator')

const mediaSchema = new mongoose.Schema(
    {
        mediaName: {
            type: String,
            required: [true, 'Please enter media title'],
        },

        mediaUrl: {
            type: String,
        },

        mediaType: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

const certificateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter certificate name.'],
        },
        imageUrl: {
            type: String,
        },
        issueDate: {
            type: Date,
            required: [
                true,
                'Please enter the date of issuance of the certificate.',
            ],
        },
        expirationDate: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
)

const farmSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter farm's name"],
            minLength: 2,
            maxLength: 30,
        },
        country: {
            type: String,
            required: [true, 'Country is required.'],
        },
        region: {
            type: String,
            enum: [
                'South America',
                'Central America',
                'North America',
                'Asia',
                'Africa',
                'Europe',
                'Oceania',
            ],
            required: [true, 'Region is required.'],
        },
        address: {
            type: String,
            required: [true, "Please enter farm's address"],
        },
        contactName: {
            type: String,
            required: [true, 'Please enter contact name'],
            minLength: 4,
            maxLength: 30,
        },
        phoneNumber: {
            type: String,
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
        logo: {
            type: String,
            default: 'Default Picture URL',
        },
        about: {
            type: String,
        },
        farmElevation: {
            type: Number,
        },
        location: {
            type: { type: String, default: 'Point' },
            coordinates: { type: [Number], default: undefined },
        },
        media: [mediaSchema],
        certificates: [certificateSchema],
    },
    {
        timestamps: true,
    }
)

const Farm = mongoose.model('Farm', farmSchema)
module.exports = Farm