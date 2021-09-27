const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.status(200).send('Hello Team Welcome to Javalimos')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
