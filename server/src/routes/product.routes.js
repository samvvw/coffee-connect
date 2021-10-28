const express = require('express')
const farmProductRouter = express.Router()
const allProductRouter = express.Router()
const {
    createProduct,
    getProducts,
    getProductById,
    modifyProduct,
    deleteProduct,
} = require('../controllers/product.controller')
const { validateToken } = require('../middleware/user.middleware')

// POST Product - Create a new product
farmProductRouter.post('/', validateToken, createProduct)

// GET Products - Gets all products
allProductRouter.get('/', getProducts)

// GET Product - Gets a single product
farmProductRouter.get('/:productId', getProductById)

// PUT Product - Modify a single product
farmProductRouter.put('/:productId', validateToken, modifyProduct)

// DELETE Product - Delete a single product
farmProductRouter.delete('/:productId', validateToken, deleteProduct)

module.exports = { farmProductRouter, allProductRouter }
