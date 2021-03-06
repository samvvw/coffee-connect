const express = require('express')
// const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const connectDB = require('./config/db')
const apiRouter = require('./api')

const PORT = process.env.PORT || 8080

connectDB()
// app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send('Hello Team Welcome to Javalimos')
})

app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
