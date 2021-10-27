const express = require('express')
const productRouter = express.Router()
const allProductRouter = express.Router()
const { createProduct, getProducts, getProductById, modifyProduct, deleteProduct } = require('../controllers/product.controller')

// POST Product - Create a new product
productRouter.post('/', createProduct)

// GET Products - Gets all products
allProductRouter.get('/', getProducts)

// GET Product - Gets a single product
productRouter.get('/:productId', getProductById)

// PUT Product - Modify a single product
productRouter.put('/:productId', modifyProduct)

// DELETE Product - Delete a single product
productRouter.delete('/:productId', deleteProduct)


module.exports = {productRouter, allProductRouter}