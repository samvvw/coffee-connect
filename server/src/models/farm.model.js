const mongoose = require('mongoose')


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
        origin: {
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
        description: {
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
        // coordinate: {
        //     type: Object,
        //     //Request should be {type: "Point", coordinates: [-73.856077, 40.848447]}
        //     // required: [true, "Please enter coordinate"],
        // },
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
    },
    {
        timestamps: true,
    }
)

const Farm = mongoose.model('Farm', farmSchema)
module.exports = Farm
