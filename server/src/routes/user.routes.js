const express = require('express')
const userRouter = express.Router()
const {
    userSignUp,
    userSignIn,
    uploadProfilePicture,
    modifyProfilePicture,
    deleteProfilePicture,
} = require('../controllers/user.controller')
const { validateToken } = require('../middlewares/user.middleware')

userRouter.post('/sign-up', userSignUp)
userRouter.post('/sign-in', userSignIn)

// POST image
userRouter.post('/profile-picture', validateToken, uploadProfilePicture)
// PUT image
userRouter.put('/profile-picture', modifyProfilePicture)
// DELETE image
userRouter.delete('/profile-picture', deleteProfilePicture)

module.exports = userRouter
