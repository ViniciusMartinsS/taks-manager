'use strict'

const { schemaValidator } = require('../../schemas')
const {
  createProjectData,
  selectProjectData,
  updateProjectData,
  removeProjectData
} = require('../model/project')

module.exports.show = async req => {
  const params = schemaValidator(req, 'project', 'select')
  return selectProjectData(params)
}

module.exports.create = async req => {
  const params = schemaValidator(req, 'project', 'create')
  return createProjectData(params)
}

module.exports.update = async req => {
  const params = schemaValidator(req, 'project', 'update')
  return updateProjectData(params)
}

module.exports.remove = async req => {
  const params = schemaValidator(req, 'project', 'remove')
  return removeProjectData(params)
}
