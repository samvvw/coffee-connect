const express = require('express')
const apiRouter = express.Router()
const userRouter = require('../routes/user.routes')
const farmRouter = require('../routes/farm.routes')
const contactRouter = require('../routes/contact.routes')
const newsletterSubscriptionRouter = require('../routes/newsletterSubscription.routes')

apiRouter.use('/user', userRouter)
apiRouter.use('/farm', farmRouter)
apiRouter.use('/contactUs', contactRouter)
apiRouter.use('/newsletterSubscription', newsletterSubscriptionRouter)

module.exports = apiRouter
