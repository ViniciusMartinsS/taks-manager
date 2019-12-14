'use strict'

const { schemaValidator } = require('../../schemas')
const { authSelectUser } = require('../model/auth')

module.exports.login = async req => {
  const params = schemaValidator(req, 'auth', 'login')
  return authSelectUser(params)
}
