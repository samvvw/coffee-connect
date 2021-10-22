const express = require('express')
const userRouter = express.Router()
const {
    userSignUp,
    userSignIn,
    uploadProfilePicture,
    deleteProfilePicture,
} = require('../controllers/user.controller')
const { validateToken } = require('../middlewares/user.middleware')

userRouter.post('/sign-up', userSignUp)
userRouter.post('/sign-in', userSignIn)

// POST image
userRouter.post('/profile-picture', validateToken, uploadProfilePicture)
// PUT image
userRouter.put(
    '/profile-picture',
    validateToken,
    deleteProfilePicture,
    uploadProfilePicture
)
// DELETE image
userRouter.delete('/profile-picture', validateToken, deleteProfilePicture)

module.exports = userRouter
