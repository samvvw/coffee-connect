const express = require('express')
const farmProductRouter = express.Router()
const allProductRouter = express.Router()
const {
    productParams,
    createProduct,
    getProducts,
    getProductById,
    modifyProduct,
    deleteProduct,
    uploadProductPicture,
    deleteProductPicture,
    createProductPictures,
} = require('../controllers/product.controller')
const { validateToken } = require('../middleware/user.middleware')
const { validateFarmerUser } = require('../middleware/farm.middleware')

farmProductRouter.param('productId', productParams)
// POST Product - Create a new product
farmProductRouter.post('/', validateToken, validateFarmerUser, createProduct)

// GET Products - Gets all products
allProductRouter.get('/', getProducts)

// GET Product - Gets a single product
farmProductRouter.get('/:productId', getProductById)

// PUT Product - Modify a single product
farmProductRouter.put(
    '/:productId',
    validateToken,
    validateFarmerUser,
    modifyProduct
)

// DELETE Product - Delete a single product
farmProductRouter.delete(
    '/:productId',
    validateToken,
    validateFarmerUser,
    deleteProduct
)

farmProductRouter.post(
    '/:productId/pictures',
    validateToken,
    validateFarmerUser,
    uploadProductPicture
)
farmProductRouter.post(
    '/:productId/pictures-new',
    validateToken,
    validateFarmerUser,
    createProductPictures
)
farmProductRouter.delete(
    '/:productId/pictures',
    validateToken,
    validateFarmerUser,
    deleteProductPicture
)

module.exports = { farmProductRouter, allProductRouter }
