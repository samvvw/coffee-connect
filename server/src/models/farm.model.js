const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            maxLength: 150,
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

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
            enum: [
                //Based on REST countries - Region
                'Africa',
                'Americas',
                'Asia',
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
            maxLength: 2000,
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
            type: String, //As of now, picture only based on the hi-fi, if needed, use mediaSchema later
            default: 'Default Picture URL',
        },
        certification: {
            type: [String], //As of now, pictures only based on the hi-fi, if needed, use certificationSchema later
            // maxItems: 3,
        },
        gallery: {
            type: [mediaSchema], //As of now, pictures only based on the hi-fi, if needed, use mediaSchema later
            // maxItems: 10,
        },
        bookmarks: {
            type: [String], //Store UserId who liked the farm
        },
    },
    {
        timestamps: true,
    }
)

farmSchema.index({
    name: 'text',
    origin: 'text',
    location: 'text',
})

const Farm = mongoose.model('Farm', farmSchema)

Farm.syncIndexes()
module.exports = Farm
