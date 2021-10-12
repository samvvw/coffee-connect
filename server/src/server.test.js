const mongoose = require('mongoose')
const request = require('supertest')
const server = require('./server')
require('./user.test')

// beforeAll(async () => {
//     await request(server).get('/').send()
// })
describe('GET /2', function () {
    test('Server running', async function () {
        const response = await request(server).get('/').send()
        expect(response.status).toBe(200)
    })
})

afterAll(async () => {
    try {
        // console.log(mongoose)
        // const { users } = mongoose.connection.collections
        // // // Collection is being dropped.
        // await users.drop()
        // Connection to Mongo killed.
        await mongoose.connection.close()
        // Server connection closed.
        server.close()
        // await server.close()
    } catch (error) {
        console.log(`
    You did something wrong dummy!
    ${error}
  `)
        throw error
    }
})
