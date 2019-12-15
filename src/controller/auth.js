'use strict'

const { schemaValidator } = require('../../schemas')
const {
  authRegisterUser,
  authSelectUser,
  authLogoutUser,
  authBlackListTokens
} = require('../model/auth')

module.exports.login = async req => {
  const params = schemaValidator(req, 'auth', 'login')
  return authSelectUser(params)
}

module.exports.register = async req => {
  const params = schemaValidator(req, 'auth', 'register')
  return authRegisterUser(params)
}

module.exports.logout = async req => {
  const token = req && req.headers && req.headers.authorization

  if (!token) {
    throw new Error('Missing token')
  }

  return authLogoutUser({ token })
}

module.exports.token = async params =>
  authBlackListTokens(params)
