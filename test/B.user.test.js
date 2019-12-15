/* eslint-disable node/no-unpublished-require */
/* eslint-env mocha */
/* eslint no-debugger: off */

const { show } = require('../src/controller/user')
const { expect } = require('chai')

const Mock = require('./mocks/user')

describe('User Test Suite', () => {
  it('Expect to not select a user when payload is not valid', async () => {
    try {
      const params = Mock.show.invalid
      const response = await show(params)
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err.message).to.be.equal('string')
    }
  })

  it('Expect to select all users', async () => {
    const response = await show()

    expect(typeof response).to.be.equal('object')
    expect(Array.isArray(response)).to.be.equal(true)
    expect(typeof response[0].dataValues).to.be.equal('object')
    expect(response[0].dataValues).to.have.property('id')
    expect(typeof response[0].dataValues.id).to.be.equal('number')
    expect(response[0].dataValues).to.have.property('name')
    expect(typeof response[0].dataValues.name).to.be.equal('string')
    expect(response[0].dataValues).to.have.property('email')
    expect(typeof response[0].dataValues.email).to.be.equal('string')
  })

  it('Expect to select a specific user by id', async () => {
    const params = Mock.show.valid
    const { dataValues: response } = await show(params)

    expect(typeof response).to.be.equal('object')
    expect(response).to.have.property('id')
    expect(typeof response.id).to.be.equal('number')
    expect(response).to.have.property('name')
    expect(typeof response.name).to.be.equal('string')
    expect(response).to.have.property('email')
    expect(typeof response.email).to.be.equal('string')
  })
})
