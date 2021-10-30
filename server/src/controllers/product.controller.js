const Product = require('../models/product.model')
const fs = require('fs')
const { s3Client } = require('../config/s3Client')
const { PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3')

const BUCKET_NAME = process.env.AWS_BUCKET_NAME
const REGION = process.env.AWS_REGION

exports.createProduct = async (req, res) => {
    try {
        const {
            farmId,
            name,
            description,
            taste,
            price,
            aroma,
            coffeeStock,
            roastLevel,
            roastDate,
            coffeeVariety,
            size,
            coffeeProcess,
            type,
        } = req.body

        if (req.files) {
            const data = {
                farmId: farmId,
                name: name,
                description: description,
                taste: taste,
                price: price,
                aroma: aroma,
                coffeeStock: coffeeStock,
                roastLevel: roastLevel,
                roastDate: roastDate,
                coffeeVariety: coffeeVariety,
                size: size,
                coffeeProcess: coffeeProcess,
                type: type,
                picture: [],
            }

            const filesToUpload = []
            req.files.productPictures?.forEach((file) => {
                if (!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(file.name)) {
                    res.status(404).send('Wrong file format')
                } else {
                    filesToUpload.push(file)
                }
            })

            await Promise.all(
                filesToUpload.map(async (file, i) => {
                    const fileExtension = file.name.split('.').pop()
                    const fileName = `${farmId}/${name}/${
                        name + Date.now().toString() + '.' + fileExtension
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

                    data.picture.push(encodeURI(fileUrl))
                })
            )

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
        } else {
            const data = {
                farmId: farmId,
                name: name,
                description: description,
                taste: taste,
                price: price,
                aroma: aroma,
                coffeeStock: coffeeStock,
                roastLevel: roastLevel,
                roastDate: roastDate,
                coffeeVariety: coffeeVariety,
                size: size,
                coffeeProcess: coffeeProcess,
                type: type,
                picture: [],
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
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.getProducts = (req, res) => {
    Product.find({})
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
        farmId,
        name,
        description,
        taste,
        price,
        aroma,
        coffeeStock,
        roastLevel,
        roastDate,
        coffeeVariety,
        size,
        coffeeProcess,
        type,
    } = req.body

    const replacement = {
        farmId: farmId,
        name: name,
        description: description,
        taste: taste,
        price: price,
        aroma: aroma,
        coffeeStock: coffeeStock,
        roastLevel: roastLevel,
        roastDate: roastDate,
        coffeeVariety: coffeeVariety,
        size: size,
        coffeeProcess: coffeeProcess,
        type: type,
    }

    // This should be update needs to be tested
    Product.findOneAndReplace({ _id: req.params.productId }, replacement, {
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

exports.uploadProductPicture = async (req, res) => {
    try {
        const product = await Product.findById(req.productId)
        if (product.picture.length >= 5) {
            res.status(422).send(
                `Max 5 pictures per product  you have ${product.picture.length}`
            )
        } else {
            const filePath = req.files.productFile.path
            const fileExtension = req.files.productFile.name.split('.').pop()
            const fileName = `${req.farmId}/${product.name}/${
                product.name + Date.now().toString() + '.' + fileExtension
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
            product.picture.push(encodeURI(fileUrl))

            const savePictureDB = await product.save()

            res.json(savePictureDB)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.deleteProductPicture = (req, res) => {
    try {
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
