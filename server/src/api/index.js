const express = require('express')
const apiRouter = express.Router()
const userRouter = require('../routes/user.routes')

apiRouter.use('/user', userRouter)

module.exports = apiRouter
