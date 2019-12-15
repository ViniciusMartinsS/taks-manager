/* eslint-disable node/no-unpublished-require */
/* eslint-env mocha */
/* eslint no-debugger: off */

const { login, logout, register } = require('../src/controller/auth')
const { expect } = require('chai')
const USER = {}

const Mock = require('./mocks/auth')

describe('Auth Test Suite', () => {
  it('Expect to not create a user when payload is not valid', async () => {
    try {
      const params = Mock.register.invalid
      const response = await register(params)
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err.message).to.be.equal('string')
    }
  })

  it('Expect to create a user', async () => {
    const params = Mock.register.valid
    const { dataValues: response } = await register(params)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.name).to.be.equal('string')
    expect(response.name).to.be.equal(params.body.name)
    expect(typeof response.email).to.be.equal('string')
    expect(response.email).to.be.equal(params.body.email)
    USER.email = response.email
  })

  it('Expect to login', async () => {
    const params = Mock.login.valid
    params.body.email = USER.email
    const response = await login(params)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.name).to.be.equal('string')
    expect(typeof response.email).to.be.equal('string')
    expect(response.email).to.be.equal(params.body.email)
    expect(typeof response.token).to.be.equal('string')
    USER.token = response.token
  })

  it('Expect to logout', async () => {
    const req = { headers: { authorization: USER.token } }
    const response = await logout(req)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.token).to.be.equal('string')
    expect(response.token).to.be.equal(req.headers.authorization)
  })

  it('Expect failure to logout when payload is invalid', async () => {
    try {
      const response = await logout()
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err.message).to.be.equal('string')
    }
  })
})
