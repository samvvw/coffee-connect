const { s3Client } = require('../config/s3Client')
const {
    ListObjectsCommand,
    DeleteObjectCommand,
} = require('@aws-sdk/client-s3')

const BUCKET_NAME = process.env.AWS_BUCKET_NAME

exports.getAllProfilePictures = async (req, res) => {
    try {
        const bucketParams = {
            Bucket: BUCKET_NAME,
        }
        const bucketRequest = await s3Client.send(
            new ListObjectsCommand(bucketParams)
        )

        console.log(bucketRequest.Contents.length)
        res.json(bucketRequest)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

exports.deletePictureS3 = async (req, res) => {
    try {
        const { deleteKey } = req.body

        const bucketParams = {
            Bucket: BUCKET_NAME,
            Key: deleteKey,
        }

        const deleteObject = await s3Client.send(
            new DeleteObjectCommand(bucketParams)
        )
        console.log(deleteObject)
        res.json(deleteObject)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
