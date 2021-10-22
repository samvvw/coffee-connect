const express = require('express')
const apiRouter = express.Router()
const userRouter = require('../routes/user.routes')
const farmRouter = require('../routes/farm.routes')
const productRouter = require('../routes/product.routes')
const contactRouter = require('../routes/contact.routes')
const newsletterSubscriptionRouter = require('../routes/newsletterSubscription.routes')

apiRouter.use('/user', userRouter)
apiRouter.use('/farm', farmRouter)
apiRouter.use('/product', productRouter)
apiRouter.use('/contactUs', contactRouter)
apiRouter.use('/newsletterSubscription', newsletterSubscriptionRouter)

module.exports = apiRouter
