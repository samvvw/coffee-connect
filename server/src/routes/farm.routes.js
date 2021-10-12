const express = require('express')
const farmRouter = express.Router()
const { createFarm } = require('../controllers/farm.controller')

// POST Farm - Create a new farm
farmRouter.post('/', createFarm)

// GET Farms - Gets all farms

// GET Farm - Gets a single farm

module.exports = farmRouter
