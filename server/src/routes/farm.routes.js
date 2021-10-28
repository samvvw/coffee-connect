const express = require('express')
const farmRouter = express.Router()
const { farmProductRouter } = require('./product.routes')
const {
    createFarm,
    getFarms,
    getFarmById,
    deleteFarm,
} = require('../controllers/farm.controller')
const { validateToken } = require('../middleware/user.middleware')

// POST Farm - Create a new farm
farmRouter.post('/', validateToken, createFarm)

// GET Farms - Gets all farms
farmRouter.get('/', getFarms)

// GET Farm - Gets a single farm
farmRouter.get('/:farmId', validateToken, getFarmById)

farmRouter.use('/:farmId/product', farmProductRouter)

// DELETE Farm - Gets all farms
farmRouter.delete('/:farmId', validateToken, deleteFarm)

module.exports = farmRouter
