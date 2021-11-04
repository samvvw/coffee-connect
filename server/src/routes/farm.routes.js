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
} = require('../controllers/farm.controller')
const { validateToken } = require('../middleware/user.middleware')

farmRouter.param('farmId', getFarmParams)
// POST Farm - Create a new farm
farmRouter.post('/', validateToken, createFarm)

// GET Farms - Gets all farms
farmRouter.get('/', getFarms)

// GET Farm - Gets a single farm
farmRouter.get('/:farmId', getFarmById)

farmRouter.use('/:farmId/product', farmProductRouter)

// PUT Farm - Gets a single farm
farmRouter.put('/:farmId', validateToken, modifyFarm)

// DELETE Farm - Gets all farms
farmRouter.delete('/:farmId', validateToken, deleteFarm)

// POST Farm Pictures
farmRouter.post('/:farmId/pictures', validateToken, postFarmPicture)

farmRouter.delete('/:farmId/pictures', deleteFarmPicture)

module.exports = farmRouter
