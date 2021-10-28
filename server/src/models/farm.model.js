const mongoose = require('mongoose')
const validator = require('validator')

// const mediaSchema = new mongoose.Schema(
//     {
//         mediaName: {
//             type: String,
//             required: [true, 'Please enter media title'],
//         },

//         mediaUrl: {
//             type: String,
//         },

//         mediaType: {
//             type: String,
//         },
//     },
//     {
//         timestamps: true,
//     }
// )

// const certificationSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'Please enter certificate name.'],
//         },
//         imageUrl: {
//             type: String,
//         },
//         issueDate: {
//             type: Date,
//             required: [
//                 true,
//                 'Please enter the date of issuance of the certificate.',
//             ],
//         },
//         expirationDate: {
//             type: Date,
//         },
//     },
//     {
//         timestamps: true,
//     }
// )

const farmSchema = new mongoose.Schema(
    {
        logo: {
            type: String,
            default: 'Default Picture URL',
        },
        name: {
            type: String,
            required: [true, "Please enter farm's name"],
            minLength: 2,
            maxLength: 50,
        },
        location: {
            type: String,
            required: [true, 'Country is required.'],
        },
        region: {
            type: String,
            enum: [  //temporal sets, and depends on API
                'South America',
                'Central America',
                'North America',
                'Asia',
                'Africa',
                'Europe',
                'Oceania',
            ],
        },
        altitude: {
            type: Number,
            // required: [true, "Please enter altitude"],
        },
        farmSize: {
            type: Number,
            // required: [true, "Please enter farm size"],
        },
        Description: {
            type: String,
            maxLength: 500,
            // minLength: 2,
            // required: [true, "Please enter farm description"],
        },
        coordinate: {
            type: [Number],
            maxItems: 2,
            // minItems: 2,
            // required: [true, "Please enter coordinate"],
        },
        farmPicture: {
            type: String,  //As of now, picture only based on the hi-fi, if needed, use mediaSchema later
            // required: [true, "Please enter coordinate"],
        },
        certification: {
            type: [String],  //As of now, pictures only based on the hi-fi, if needed, use certificationSchema later
            // maxItems: 3,
        },
        gallery: {
            type: [String],  //As of now, pictures only based on the hi-fi, if needed, use mediaSchema later
            // maxItems: 10, 
        },
        // email: {
        //     type: String,
        //     required: [true, 'Please input your email'],
        //     validate: [
        //         {
        //             validator: function (email) {
        //                 return validator.isEmail(email)
        //             },
        //             messages: `Please input a valid email`,
        //         },
        //     ],
        // },
    },
    {
        timestamps: true,
    }
)

const Farm = mongoose.model('Farm', farmSchema)
module.exports = Farm
