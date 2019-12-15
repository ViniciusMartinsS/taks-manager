'use strict'
/* eslint-disable node/no-unpublished-require */
/* eslint-env mocha */
/* eslint no-debugger: off */

const { create, show, update, remove } = require('../src/controller/task')
const { expect } = require('chai')
const models = require('../database/models')

const Mock = require('./mocks/task')
const TASK = {}

describe('Task Test Suite', () => {
  it('Expect to not create a task when payload is not valid', async () => {
    try {
      const params = Mock.create.invalid
      const response = await create(params)
      expect(response).to.be.equal(undefined)
    } catch (err) {
      expect(typeof err.message).to.be.equal('string')
    }
  })

  it('Expect to create a task', async () => {
    const { PROJECT_ID } = require('./C.project.test')

    const params = Mock.create.valid
    params.body.projectId = PROJECT_ID
    const { dataValues: response } = await create(params)

    expect(typeof response).to.be.equal('object')
    expect(typeof response.description).to.be.equal('string')
    expect(response.description).to.be.equal(params.body.description)
    expect(typeof response.projectId).to.be.equal('number')
    expect(response.projectId).to.be.equal(params.body.projectId)
    TASK.id = response.id
  })

  it('Expect to select all tasks', async () => {
    const response = await show()

    expect(typeof response).to.be.equal('object')
    expect(Array.isArray(response)).to.be.equal(true)
    expect(typeof response[0].dataValues).to.be.equal('object')
    expect(response[0].dataValues).to.have.property('id')
    expect(typeof response[0].dataValues.id).to.be.equal('number')
    expect(response[0].dataValues).to.have.property('description')
    expect(typeof response[0].dataValues.description).to.be.equal('string')
    expect(response[0].dataValues).to.have.property('projectId')
    expect(typeof response[0].dataValues.projectId).to.be.equal('number')
    expect(response[0].dataValues).to.have.property('done')
    expect(typeof response[0].dataValues.done).to.be.equal('boolean')
    expect(response[0].dataValues).to.have.property('endAt')
  })

  it('Expect to select a specific task by id', async () => {
    const params = Mock.show.valid
    params.body.id = TASK.id
    const response = await show(params)

    expect(typeof response).to.be.equal('object')
    expect(response).to.have.property('id')
    expect(typeof response.id).to.be.equal('number')
    expect(response).to.have.property('description')
    expect(typeof response.description).to.be.equal('string')
    expect(response).to.have.property('projectId')
    expect(typeof response.projectId).to.be.equal('number')
    expect(response).to.have.property('done')
    expect(typeof response.done).to.be.equal('boolean')
    expect(response).to.have.property('endAt')
  })

  it('Expect to update a specific task by id', async () => {
    const params = Mock.update.valid
    params.body.id = TASK.id
    const response = await update(params)

    expect(typeof response).to.be.equal('object')
    expect(Array.isArray(response)).to.be.equal(true)
    expect(typeof response[0]).to.be.equal('number')
    expect(response[0]).to.be.equal(1)
  })

  it('Expect to remove a specific task by id', async () => {
    const params = Mock.remove.valid
    params.body.id = TASK.id
    const response = await remove(params)

    expect(typeof response).to.be.equal('number')
    expect(response).to.be.equal(1)
  })

  after(done => {
    models.sequelize.close()
    return done()
  })
})
