const Product = require('../models/product.model')
const fs = require('fs')
const { s3Client } = require('../config/s3Client')
const { PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3')

const BUCKET_NAME = process.env.AWS_BUCKET_NAME
const REGION = process.env.AWS_REGION

exports.productParams = async (req, res, next, productId) => {
    if (productId) {
        const product = await Product.findById(productId)
        req.product = product
        req.productId = productId
        next()
    } else {
        res.status(400).send('no product id provided')
    }
}

exports.createProduct = async (req, res) => {
    try {
        const {
            productName,
            description,
            taste,
            aromas,
            roastLevel,
            coffeeProcess,
            coffeeVariety,
            roastDate,
            coffeeType,
            sizePrice,
        } = req.body

        const data = {
            farmId: req.farmId,
            farmName: req.farm.name,
            altitude: req.farm.altitude,
            coordinate: req.farm.coordinate,
            origin: req.farm.origin,
            location: req.farm.location,
            productName: productName,
            description: description,
            taste: taste,
            aromas: aromas,
            roastLevel: roastLevel,
            coffeeProcess: coffeeProcess,
            coffeeVariety: coffeeVariety,
            roastDate: roastDate,
            coffeeType: coffeeType,
            sizePrice: sizePrice,
        }

        const createProduct = await Product.create(data)
        if (createProduct) {
            res.set(
                'content-location',
                `/api/farm/${createProduct.farmId}/product/${createProduct._id}`
            )
        }

        res.status(201).json({
            data: createProduct,
            url: `/api/farm/${createProduct.farmId}/product/${createProduct._id}`,
        })
        // res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.getProducts = (req, res) => {
    //if no query, return all
    if (
        Object.keys(req.query).length == 0 ||
        Object.values(req.query)[0] == false
    ) {
        Product.find(
            {},
            {
                _id: 1,
                firmId: 1,
                coordinate: 1,
                location: 1,
                productName: 1,
                description: 1,
                taste: 1,
                roastLevel: 1,
                sizePrice: 1,
                picture: 1,
            })
            .exec()
            .then((result) => {
                let data = []
                for (i = 0; i < result.length; i++) {
                    let url = `/api/farm/${result[i].farmId}/product/${result[i]._id}`

                    let newData = {
                        data: result[i],
                        url: url,
                    }

                    data.push(newData)
                }
                res.json(data)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).send(error)
            })

        //if with query strings, return filtered result with the requested filters
    } else {
        //preparing filter object
        let setQuery = {}

        if ('search' in req.query) {
            setQuery.$text = { $search: req.query.search }
        }

        //if price filter requested, make filter query and set in filer object
        if ('minPrice' in req.query && 'maxPrice' in req.query) {
            setQuery['sizePrice.price'] = {
                $gte: parseFloat(req.query.minPrice),
                $lte: parseFloat(req.query.maxPrice),
            }
        }

        //if roastedLevel filter requested, make the filter query and set in filter object
        if ('roastLevel' in req.query) {
            setQuery.roastLevel = { $in: req.query.roastLevel }
        }

        //if origin filter requested, make the filter query and set in filter object
        if ('origin' in req.query) {
            setQuery.origin = { $in: req.query.origin }
        }

        //Try to get the data with the filter object prepared above, and return the data
        Product.find(setQuery, 
            {
                _id: 1,
                firmId: 1,
                coordinate: 1,
                location: 1,
                productName: 1,
                description: 1,
                taste: 1,
                roastLevel: 1,
                sizePrice: 1,
                picture: 1,
            })
            .exec()
            .then((result) => {
                let data = []
                for (i = 0; i < result.length; i++) {
                    let url = `/api/farm/${result[i].farmId}/product/${result[i]._id}`

                    let newData = {
                        data: result[i],
                        url: url,
                    }

                    data.push(newData)
                }
                res.json(data)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).send(error)
            })
    }
}

exports.getProductById = (req, res) => {
    Product.findOne({ _id: req.params.productId })
        .exec()
        .then((result) => {
            res.json({
                data: result,
                url: `/api/farm/${result.farmId}/product/${result._id}`,
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.modifyProduct = (req, res) => {
    const {
        productName,
        description,
        taste,
        aromas,
        roastLevel,
        coffeeProcess,
        coffeeVariety,
        roastDate,
        coffeeType,
        sizePrice,
    } = req.body

    const data = {
        productName: productName,
        description: description,
        taste: taste,
        aromas: aromas,
        roastLevel: roastLevel,
        coffeeProcess: coffeeProcess,
        coffeeVariety: coffeeVariety,
        roastDate: roastDate,
        coffeeType: coffeeType,
        sizePrice: sizePrice,
    }

    // This should be update needs to be tested
    Product.findOneAndUpdate({ _id: req.params.productId }, data, {
        new: true,
    })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.productId })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}

exports.createProductPictures = async (req, res) => {
    try {
        const filesToUpload = []
        if (Array.isArray(req.files.productPictures)) {
            req.files.productPictures?.forEach((file) => {
                if (!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(file.name)) {
                    res.status(404).send('Wrong file format')
                } else {
                    filesToUpload.push(file)
                }
            })
        } else {
            filesToUpload.push(req.files.productPictures)
        }

        await Promise.all(
            filesToUpload.map(async (file, i) => {
                const fileExtension = file.name.split('.').pop()
                const fileName = `${req.farm._id}/${req.product.productName}/${
                    req.product.productName +
                    Date.now().toString() +
                    i +
                    '.' +
                    fileExtension
                }`
                const filePath = file.path
                const fileStream = fs.createReadStream(filePath)

                const bucketParam = {
                    Bucket: BUCKET_NAME,
                    Key: fileName,
                    Body: fileStream,
                    ACL: 'public-read',
                }

                const uploadPicture = await s3Client.send(
                    new PutObjectCommand(bucketParam)
                )

                const fileUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`

                req.product.picture.push(encodeURI(fileUrl))
            })
        )

        const savedProduct = await req.product.save()

        res.json(savedProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.uploadProductPicture = async (req, res) => {
    try {
        if (req.product.picture.length >= 5) {
            res.status(422).send(
                `Max 5 pictures per product  you have ${req.product.picture.length}`
            )
        } else {
            const filePath = req.files.productFile.path
            const fileExtension = req.files.productFile.name.split('.').pop()
            const fileName = `${req.farm._id}/${req.product.productName}/${
                req.product.productName +
                Date.now().toString() +
                Math.floor(Math.random() * 10) +
                '.' +
                fileExtension
            }`

            if (
                !/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
                    req.files.productFile.name
                )
            ) {
                res.status(404).send('Wrong file format')
            }

            const fileStream = fs.createReadStream(filePath)

            const bucketParams = {
                Bucket: BUCKET_NAME,
                Key: fileName,
                Body: fileStream,
                ACL: 'public-read',
            }

            const uploadPicture = await s3Client.send(
                new PutObjectCommand(bucketParams)
            )
            const fileUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`
            req.product.picture.push(encodeURI(fileUrl))

            const savePictureDB = await req.product.save()

            res.json(savePictureDB)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.deleteProductPicture = async (req, res) => {
    try {
        const fileKey = decodeURI(req.body.deleteUrl).split(
            'https://qafa.s3.us-west-2.amazonaws.com/'
        )[1]
        // Delete file from S3
        const bucketParams = {
            Bucket: BUCKET_NAME,
            Key: fileKey,
        }

        const deleteFromS3 = await s3Client.send(
            new DeleteObjectCommand(bucketParams)
        )

        // Delete url from Product picture Array
        if (deleteFromS3) {
            req.product.picture.pull(req.body.deleteUrl)
            const removePictureUrlDB = await req.product.save()
            res.json(removePictureUrlDB)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
