const { assert } = require('chai')
const request = require('supertest')
const app = require('./server')

describe('GET /', function () {
    it('Server running', async function () {
        const response = await request(app).get('/').send()

        assert.equal(response.status, 200)
    })
})
