const express = require('express')
const apiRouter = express.Router()
const userRouter = require('../routes/user.routes')
const farmRouter = require('../routes/farm.routes')

apiRouter.use('/user', userRouter)
apiRouter.use('/farm', farmRouter)

module.exports = apiRouter
