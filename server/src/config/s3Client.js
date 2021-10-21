const { S3Client } = require('@aws-sdk/client-s3')

const REGION = process.env.AWS_REGION

const s3Client = new S3Client({
    region: REGION,
})

module.exports = { s3Client }
