const mongoose = require('mongoose')
// const validator = require('validator')

// const mediaSchema = new mongoose.Schema({
//     mediaName: {
//         type: String,
//     },

//     mediaUrl: {
//         type: String,
//     },

//     mediaType: {
//         type: String,
//     },
// })

// const productVariationSchema = new mongoose.Schema({
//     price: {
//         type: Number,
//         min: 0,
//     },

//     weight: {
//         type: Number,
//         min: 0,
//     },

//     unit: {
//         type: String,
//         enum: {
//             values: ['g', 'kg', 'lb', 'oz'],
//             message: '{VALUE} is not supported',
//         },
//     },
// })


const sizeSchema = new mongoose.Schema({

    weight: {
        type: Number,
        min: 0,
    },

    unit: {
        type: String,
        enum: {
            values: ['g', 'kg', 'lb', 'oz'],
            message: '{VALUE} is not supported',
        },
    },
})

const productSchema = new mongoose.Schema(
    {
        farmId: {
            type: String,
            required: [true, 'Missing farm ID'],
        },

        name: {
            type: String,
            required: [true, 'Please input product name'],
            minLength: 2,
            maxLength: 50,
        },

        description: {
            type: String,
            required: [true, 'Please input description of the product'],
            maxLength: 1000,
        },

        taste: {
            type: String,
        },

        price: {
            type: Number,
        },

        aroma: {
            type: [String],
        },

        coffeeStock: {
            type: String,
        },

        roastLevel: {
            type: String,
        },

        roastDate: {
            type: Date,
        },

        coffeeVariety: {
            type: String,
        },

        size: [sizeSchema],

        coffeeProcess: {
            type: String,
        },
    
        type: {
            type: String,
            enum: [
                'Whole Bean',
                'Grounded',
            ],
        },

        reviews: {
            type: [String],
        },

        score: {
            type: Number,
        },

        picture: {
            type: [String],
            maxItems: 5,
        }
    },

    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
