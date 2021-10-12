const request = require('supertest')
const server = require('./server')

describe('User Routes Test', function () {
    describe('POST /api/user/sign-up', function () {
        test('Sign-up new user', async function () {
            const data = {
                userName: 'Pepito',
                firstName: 'Pepe',
                lastName: 'Ramirez',
                email: 'pepito_r@gmail.com',
                password: '12345678',
                userType: 'farmer',
            }
            const response = await request(server)
                .post('/api/user/sign-up')
                .set('Content-type', 'application/json')
                .send(data)
            console.log(response.body)
            expect(response.status).toBe(201)
        })
    })
    describe('POST /api/user/sign-in', function () {
        test('Login existing user', async function () {
            const data = {
                email: 'pepito_r@gmail.com',
                password: '12345678',
            }
            const response = await request(server)
                .post('/api/user/sign-in')
                .set('Content-type', 'application/json')
                .send(data)

            expect(response.status).toBe(200)
        })
    })
})
