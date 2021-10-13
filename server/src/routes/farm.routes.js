const express = require('express')
const farmRouter = express.Router()
const { createFarm, getFarms, getFarmById } = require('../controllers/farm.controller')

// POST Farm - Create a new farm
farmRouter.post('/', createFarm)

// GET Farms - Gets all farms
farmRouter.get('/', getFarms)

// GET Farm - Gets a single farm
farmRouter.get('/:id', getFarmById)

module.exports = farmRouter
