'use strict'

const { schemaValidator } = require('../../schemas')
const { authRegisterUser, authSelectUser } = require('../model/auth')

module.exports.login = async req => {
  const params = schemaValidator(req, 'auth', 'login')
  return authSelectUser(params)
}

module.exports.register = async req => {
  const params = schemaValidator(req, 'auth', 'register')
  return authRegisterUser(params)
}
