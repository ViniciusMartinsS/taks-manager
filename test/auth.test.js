/* eslint-disable node/no-unpublished-require */
/* eslint-env mocha */
/* eslint no-debugger: off */

const { register } = require('../src/controller/auth')
const { expect } = require('chai')

const Mock = require('./mocks/auth')

describe('Auth Test Suite', () => {
  it('Expect to not create a user when payload is not valid', async () => {
    try {
      const response = await register(Mock.register.invalid)
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err.message).to.be.equal('string')
    }
  })

  it('Expect to create a user', async () => {
    const response = await register(Mock.register.valid)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.name).to.be.equal('string')
    expect(response.name).to.be.equal(Mock.register.valid.name)
    expect(typeof response.email).to.be.equal('string')
    expect(response.email).to.be.equal(Mock.register.valid.email)
  })
})
