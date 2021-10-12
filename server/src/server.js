const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const connectDB = require('./config/db')
const apiRouter = require('./api')

const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Hello Team Welcome to Javalimos')
})

app.use('/api', apiRouter)

connectDB()
const server = app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`Server running on http://localhost:${PORT}`)
    }
})
module.exports = server
