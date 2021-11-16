const express = require('express')
const testRouter = express.Router()
const {
    getAllProfilePictures,
    deletePictureS3,
} = require('../controllers/test.controller')

testRouter.get('/all-profile-pictures', getAllProfilePictures)
testRouter.delete('/all-profile-pictures', deletePictureS3)
module.exports = testRouter
