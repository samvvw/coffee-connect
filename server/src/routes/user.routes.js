const express = require('express')
const userRouter = express.Router()
const { userSignUp, userSignIn } = require('../controllers/user.controller')

userRouter.post('/sign-up', userSignUp)
userRouter.post('/sign-in', userSignIn)

module.exports = userRouter
