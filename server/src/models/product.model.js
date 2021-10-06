const mongoose = require('mongoose')
// const validator = require('validator')


const mediaSchema = new mongoose.Schema(
    {
        mediaName: {
            type: String,
        },

        mediaUrl: {
            type: String,
        },

        mediaType: {
            type: String,
        },
    }
)


const productVariationSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            min: 0,
        },

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
    },
)


const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please input your farm name'],
            minLength: 2,
            maxLength: 15,
        },

        description: {
            type: String,
            required: [true, 'Please input description of your farm'],
            maxLength: 1000,
        },

        farmId: {
            type: String,
            required: [true, 'Missing farm ID'],
        },

        media: [mediaSchema],

        variety: {
            type: String,
        },

        coffeeProcess: {
            type: String,
        },

        flavorNotes: {
            type: [String],
        },

        roastDate: {
            type: Date,
        },

        productVariations: [productVariationSchema],

        reviews: {
            type: [String],
        },

        score: {
            type: Number,
        },

        aroma: {
            type: String,
        },
    },

    {
        timestamps: true,
    }
)


const Product = model('Product', productSchema);
module.exports = Product;