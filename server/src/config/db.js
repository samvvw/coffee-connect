const mongoose = require('mongoose')

module.exports = connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, () => {
            console.log(`DB connected: ${process.env.MONGODB_URL}`)
        })
    } catch (error) {
        console.log(error)
    }
}
