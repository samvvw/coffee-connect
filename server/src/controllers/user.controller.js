const User = require('../models/user.model')

exports.userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, userName, password, userType } =
            req.body

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password,
            userType: userType,
        }
        const createUser = await User.create(data)

        res.status(201).json({
            createUser,
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
