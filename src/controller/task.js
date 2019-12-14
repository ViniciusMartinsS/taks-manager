'use strict'

const { schemaValidator } = require('../../schemas')
const {
  createTaskData,
  selectTaskData,
  updateTaskData,
  removeTaskData
} = require('../model/task')

module.exports.show = async req => {
  const params = schemaValidator(req, 'task', 'select')
  return selectTaskData(params)
}

module.exports.create = async req => {
  const params = schemaValidator(req, 'task', 'create')
  return createTaskData(params)
}

module.exports.update = async req => {
  const params = schemaValidator(req, 'task', 'update')
  return updateTaskData(params)
}

module.exports.remove = async req => {
  const params = schemaValidator(req, 'task', 'remove')
  return removeTaskData(params)
}
