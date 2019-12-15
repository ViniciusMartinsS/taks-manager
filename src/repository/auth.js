'use strict'

const models = require('../../database/models')
const Token = models.Token

module.exports.logout = payload =>
  Token.create({ ...payload })

module.exports.selectTokens = payload =>
  Token.findOne({ ...payload })
