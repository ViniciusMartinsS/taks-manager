'use strict'

const models = require('../../database/models')
const Auth = models.User

module.exports.findOne = payload =>
  Auth.findOne({ ...payload })
