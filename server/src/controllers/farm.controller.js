const Farm = require('../models/farm.model')
const User = require('../models/user.model')

exports.createFarm = async (req, res) => {
    try {
        const {
            name,
            email,
            country,
            region,
            address,
            contactName,
            phoneNumber,
            about,
            farmElevation,
            location,
        } = req.body

        // we need to save logo in S3 to generate URL before saving data into MongoDB
        const data = {
            name: name,
            email: email,
            country: country,
            region: region,
            address: address,
            contactName: contactName,
            phoneNumber: phoneNumber,
            about: about,
            farmElevation: farmElevation,
            location: location,
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
    //Need to consider how we should work with score(rate)
    //Also can add more fields to return if needed
    Farm.find({}, { name: 1, region: 1, country: 1, about: 1 })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.getFarmById = (req, res) => {
    //As of now, returning all fields, as it's details of the farm, it must show most of the data?
    //Can limit the fields to return later on if needed in the same way of getFarms
    Farm.findOne({ _id: req.params.id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}
