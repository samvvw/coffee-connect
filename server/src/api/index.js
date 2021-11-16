const express = require('express')
const apiRouter = express.Router()
const userRouter = require('../routes/user.routes')
const farmRouter = require('../routes/farm.routes')
const { allProductRouter } = require('../routes/product.routes')
const contactRouter = require('../routes/contact.routes')
const newsletterSubscriptionRouter = require('../routes/newsletterSubscription.routes')
const testRouter = require('../routes/test.routes')

// User Routes
apiRouter.use('/user', userRouter)
// Farm Routes
apiRouter.use('/farm', farmRouter)

// apiRouter.use('/farm/:farmId/product', productRouter)
// Product Routes
apiRouter.use('/product', allProductRouter)
// Contact Us Routes
apiRouter.use('/contactUs', contactRouter)
// Newsletter Routes
apiRouter.use('/newsletterSubscription', newsletterSubscriptionRouter)
// Test Routes
apiRouter.use('/test', testRouter)

module.exports = apiRouter
