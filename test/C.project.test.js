/* eslint-disable node/no-unpublished-require */
/* eslint-env mocha */
/* eslint no-debugger: off */

const { create, show, update, remove } = require('../src/controller/project')
const { expect } = require('chai')

const Mock = require('./mocks/project')
const PROJECT = {}

describe('Project Test Suite', () => {
  it('Expect to not create a project when payload is not valid', async () => {
    try {
      const params = Mock.create.invalid
      const response = await create(params)
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err.message).to.be.equal('string')
    }
  })

  it('Expect to create a project', async () => {
    const params = Mock.create.valid
    const { dataValues: response } = await create(params)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.name).to.be.equal('string')
    expect(response.name).to.be.equal(params.body.name)
    expect(typeof response.userId).to.be.equal('number')
    expect(response.userId).to.be.equal(params.body.userId)
    PROJECT.id = response.id
  })

  it('Expect to select all projects', async () => {
    const response = await show()

    expect(typeof response).to.be.equal('object')
    expect(Array.isArray(response)).to.be.equal(true)
    expect(typeof response[0].dataValues).to.be.equal('object')
    expect(response[0].dataValues).to.have.property('id')
    expect(typeof response[0].dataValues.id).to.be.equal('number')
    expect(response[0].dataValues).to.have.property('name')
    expect(typeof response[0].dataValues.name).to.be.equal('string')
    expect(response[0].dataValues).to.have.property('userId')
    expect(typeof response[0].dataValues.userId).to.be.equal('number')
  })

  it('Expect to update a specific project by id', async () => {
    const params = Mock.update.valid
    params.body.id = PROJECT.id
    const response = await update(params)

    expect(typeof response).to.be.equal('object')
    expect(Array.isArray(response)).to.be.equal(true)
    expect(typeof response[0]).to.be.equal('number')
    expect(response[0]).to.be.equal(1)
  })

  it('Expect to remove a specific project by id', async () => {
    const params = Mock.remove.valid
    params.body.id = PROJECT.id
    const response = await remove(params)

    expect(typeof response).to.be.equal('number')
    expect(response).to.be.equal(1)
  })

  it('Expect to create a project to later on associate to a task', async () => {
    const params = Mock.create.valid
    const { dataValues: response } = await create(params)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.name).to.be.equal('string')
    expect(response.name).to.be.equal(params.body.name)
    expect(typeof response.userId).to.be.equal('number')
    expect(response.userId).to.be.equal(params.body.userId)
    module.exports = { PROJECT_ID: response.id }
  })
})
