const express = require('express')
const userRouter = express.Router()
const { userSignUp } = require('../controllers/user.controller')

userRouter.post('/sign-up', userSignUp)

module.exports = userRouter
