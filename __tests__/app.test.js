const { describe, it, expect } = require('@jest/globals')
const request = require('supertest')
const User = require('../src/models/User')
const app = require('../src/app')

jest.mock('../src/models/User', () => ({ create: jest.fn() }))

describe('User routes', () => {
	it('POST returns 200', async () => {
		const testUser = {
			username: 'testUser',
			password: 'hfgjhd',
			email: 'test@test.com'
		}

		User.create.mockResolvedValue(testUser)

		const res = await request(app).post('/users').send(testUser)

		expect(res.status).toBe(200)
		expect(User.create).toHaveBeenCalled()
		expect(res.text).toEqual('testUser')
	})

	it('POST returns error when user creation fails', async () => {
		const testUser = {
			username: 'testUser',
			password: 'hfgjhd',
			email: 'test@test.com'
		}

		User.create.mockRejectedValue(new Error('User creation failed'))

		const res = await request(app).post('/users').send(testUser)

		expect(res.status).toBe(500)
		expect(res.text).toContain('User creation failed')
	})
})
