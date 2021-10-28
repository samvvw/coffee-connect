const Farm = require('../models/farm.model')
const User = require('../models/user.model')
const Product = require('../models/product.model')

exports.createFarm = async (req, res) => {
    try {
        const {
            logo,
            name,
            location,
            origin,
            altitude,
            farmSize,
            description,
            coordinate,
            farmPicture,
            certification,
            gallery,
        } = req.body

        // logo, farmPicture, certification and gallery: Need to save logo in S3 to generate URL before saving data into MongoDB
        const data = {
            logo: logo,
            name: name,
            location: location,
            origin: origin,
            altitude: altitude,
            farmSize: farmSize,
            description: description,
            coordinate: coordinate,
            farmPicture: farmPicture,
            certification: certification,
            gallery: gallery,
        }

        const createFarm = await Farm.create(data)

        await User.findByIdAndUpdate(req.currentUser._id, {
            $push: { farms: createFarm._id },
        })

        res.status(201).json(createFarm)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.getFarms = (req, res) => {
    //The field returning is temporal as there is no hi-fi yet
    Farm.find({}, { name: 1, farmPicture: 1, location: 1, origin: 1, description: 1 }).exec()
    .then((result) => {
        //need to add Save based on User  
        res.json(result)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}

exports.getFarmById = (req, res) => {
    //need to add Save based on User, too
    
    //Adding all products which belongs to this farm
    //Search all products which have this farmId and return Array of belonging product object
    //Will modify the field to return after fixing product schema
    let getProducts;
    Product.find({farmId: req.params.farmId}, { _id: 1, name: 1 }).exec()
    .then(result => {  
        
        getProducts = result;
    })
    .then(result => {

        Farm.findOne({ '_id': req.params.farmId }).exec()
        .then((result) => {
            
            let newData = {
                data: result,
                allProducts: getProducts,
            }
            res.json(newData);
        })
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    });
}

exports.deleteFarm = (req, res) => {
    Farm.deleteOne({'_id': req.params.farmId}).exec()
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
}
