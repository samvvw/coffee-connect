const mongoose = require('mongoose')

module.exports = connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)

        if (connect) {
            connect.connections.forEach((connection) => {
                console.log(
                    `Connected to host: ${connection.host}\ndb: ${connection.name}`
                )
            })
        }
    } catch (error) {
        console.log(error)
    }
}
