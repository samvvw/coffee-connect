const express = require('express')
const productRouter = express.Router()
const { createProduct, getProducts, getProductById, modifyProduct, deleteProduct } = require('../controllers/product.controller')

// POST Product - Create a new product
productRouter.post('/', createProduct)

// GET Products - Gets all products
productRouter.get('/', getProducts)

// GET Product - Gets a single product
productRouter.get('/:id', getProductById)

// PUT Product - Modify a single product
productRouter.put('/:id', modifyProduct)

// DELETE Product - Delete a single product
productRouter.delete('/:id', deleteProduct)


module.exports = productRouter