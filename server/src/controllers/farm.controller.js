const Farm = require('../models/farm.model')
const User = require('../models/user.model')
const Product = require('../models/product.model')

exports.getFarmParams = async (req, res, next, farmId) => {
    try {
        const responseDB = await Farm.findById(farmId)

        req.farmId = farmId
        req.farm = responseDB
        // console.log(farmId)
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

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
    Farm.find(
        {},
        { name: 1, farmPicture: 1, location: 1, origin: 1, description: 1 }
    )
        .exec()
        .then((result) => {
            //need to add Save based on User
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.modifyFarm = (req, res) => {
    //Set fields and new data to be modified
    //Whichever the field/s to be modified, send in body

    // This request needs some kind of validation, if we receive keys that are not supposed to change that field will change, we have a risk here to change information we don't want to change
    // const newData = { ...req.body }

    //No need to set Token, so remove from the object
    // delete newData.token

    function objectReq(body) {
        const {
            name,
            logo,
            location,
            origin,
            altitude,
            farmSize,
            description,
            coordinate,
        } = body

        const obj = {
            name: name ? name : undefined,
            // logo: logo ? logo : undefined,
            location: location ? location : undefined,
            origin: origin ? origin : undefined,
            altitude: altitude ? altitude : undefined,
            farmSize: farmSize ? farmSize : undefined,
            description: description ? description : undefined,
            coordinate: coordinate ? coordinate : undefined,
        }

        Object.keys(obj).forEach((key) =>
            obj[key] === undefined ? delete obj[key] : {}
        )
        return obj
    }

    // console.log(objectReq(req.body))
    const newData = objectReq(req.body)

    Farm.findOneAndUpdate({ _id: req.farmId }, { $set: newData }, { new: true })
        .then((result) => {
            const productUpdate = {
                farmName: result.name,
                altitude: result.altitude,
                coordinate: result.coordinate,
                origin: result.origin,
                location: result.location,
            }
            Product.updateMany({ farmId: req.farmId }, productUpdate)
                .then((updateResult) => {
                    // console.log(result)
                    res.json(updateResult)
                })
                .catch((error) => {
                    console.log(error)
                    res.status(500).send(error)
                })
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
    let getProducts
    Product.find({ farmId: req.farmId }, { _id: 1, name: 1 })
        .exec()
        .then((result) => {
            getProducts = result
        })
        .then((result) => {
            Farm.findOne({ _id: req.farmId })
                .exec()
                .then((result) => {
                    let newData = {
                        data: result,
                        allProducts: getProducts,
                    }
                    res.json(newData)
                })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.deleteFarm = (req, res) => {
    Farm.deleteOne({ _id: req.params.farmId })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}
