const mongoose = require('mongoose')
// const validator = require('validator')

const sizePriceSchema = new mongoose.Schema(
    {
        size: {
            type: Number,
            required: [true, 'Please input size'],
            min: 0,
        },
        price: {
            type: Number,
            required: [true, 'Please input price'],
            min: 0,
        },
    },
    {
        timestamps: true,
    }
)

const productSchema = new mongoose.Schema(
    {
        farmId: {
            type: String,
            required: [true, 'Missing farm ID'],
            //get from farm
        },
        farmName: {
            type: String,
            required: [true, 'Missing farm name'],
            minLength: 2,
            maxLength: 50,
            //get from farm
        },
        altitude: {
            type: Number,
            // required: [true, 'Please input product name'],
            //get from farm
        },
        coordinate: {
            type: [Number],
            maxItems: 2,
            // required: [true, "Please enter coordinate"],
            //get from farm
        },
        origin: {
            type: String,
            enum: [  //Based on REST countries - Region
                'Africa',
                'Americas',
                'Asia',
                'Europe',
                'Oceania',
            ],
        },
        location: {
            type: String,
            required: [true, 'Missing location'],
        },
        productName: {
            type: String,
            required: [true, 'Please input product name'],
            minLength: 2,
            maxLength: 50,
        },
        description: {
            type: String,
            maxLength: 1000,
        },
        taste: {
            type: [String],
            enum: ['Sour', 'Sweet', 'Bitter', 'Salty'],
        },
        aromas: {
            type: [String],
            enum: [
                'Flowery',
                'Fruity',
                'Herby',
                'Nutty',
                'Caramelly',
                'Chocolatey',
                'Resinous',
                'Spicy',
                'Carbony',
            ],
        },
        roastLevel: {
            type: String,
            enum: ['Light', 'Medium', 'Medium - Dark', 'Dark'],
        },
        coffeeProcess: {
            type: String,
            enum: ['Natural', 'Honey', 'Pulped Natural', 'Washed'],
        },
        coffeeVariety: {
            type: String,
            enum: ['Robusta', 'Arabica'],
        },
        roastDate: {
            type: Date,
            required: [true, 'Please input roast date'],
        },
        coffeeType: {
            type: String,
            enum: ['Whole Bean', 'Grounded'],
            required: [true, 'Please select coffee type'],
        },
        sizePrice: {
            type: [sizePriceSchema],
            required: [true, 'Please input size and price'],
        },
        picture: {
            type: [String],
            maxItems: 5,
        },
        likes: {
            type: [String], //Store UserId who liked the product
        },
    },
    {
        timestamps: true,
    }
)

productSchema.index({
    farmName: 'text',
    origin: 'text',
    location: 'text',
    productName: 'text',
    coffeeProcess: 'text',
})

const Product = mongoose.model('Product', productSchema)

Product.syncIndexes()
module.exports = Product
