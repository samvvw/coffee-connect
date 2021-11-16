const express = require('express')
const farmRouter = express.Router()
const { farmProductRouter } = require('./product.routes')
const {
    createFarm,
    getFarms,
    getFarmById,
    modifyFarm,
    deleteFarm,
    getFarmParams,
    postFarmPicture,
    deleteFarmPicture,
    uploadMedia,
    removeMedia,
    bookmarks,
} = require('../controllers/farm.controller')
const { validateToken } = require('../middleware/user.middleware')
const { validateFarmerUser } = require('../middleware/farm.middleware')

farmRouter.param('farmId', getFarmParams)
// POST Farm - Create a new farm
farmRouter.post('/', validateToken, validateFarmerUser, createFarm)

// GET Farms - Gets all farms
farmRouter.get('/', getFarms)

// GET Farm - Gets a single farm
farmRouter.get('/:farmId', getFarmById)

farmRouter.use('/:farmId/product', farmProductRouter)

// PUT Farm - Gets a single farm
farmRouter.put('/:farmId', validateToken, validateFarmerUser, modifyFarm)

// DELETE Farm - Gets all farms
farmRouter.delete('/:farmId', validateToken, validateFarmerUser, deleteFarm)

farmRouter.post(
    '/:farmId/gallery',
    validateToken,
    validateFarmerUser,
    uploadMedia
)

farmRouter.delete(
    '/:farmId/gallery/:mediaId',
    validateToken,
    validateFarmerUser,
    removeMedia
)

// POST Farm Pictures
farmRouter.post(
    '/:farmId/pictures',
    validateToken,
    validateFarmerUser,
    postFarmPicture
)

farmRouter.delete(
    '/:farmId/pictures',
    validateToken,
    validateFarmerUser,
    deleteFarmPicture
)

// Bookmark Farm
farmRouter.put('/:farmId/bookmarks', bookmarks)

module.exports = farmRouter
