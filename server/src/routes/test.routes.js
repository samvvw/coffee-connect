const express = require('express')
const testRouter = express.Router()
const { getAllProfilePictures } = require('../controllers/test.controller')

testRouter.get('/all-profile-pictures', getAllProfilePictures)
module.exports = testRouter
