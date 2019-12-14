'use strict'

const { schemaValidator } = require('../../schemas')
const { createUserData, selectUserData } = require('../model/user')

module.exports.show = async req => {
  const params = schemaValidator(req, 'user', 'select')
  return selectUserData(params)
}

module.exports.create = async req => {
  const params = schemaValidator(req, 'user', 'create')
  return createUserData(params)
}
