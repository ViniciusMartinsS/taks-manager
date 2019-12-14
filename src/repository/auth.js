'use strict'

const models = require('../../database/models')
const User = models.User

module.exports.findOne = payload =>
  User.findOne({ ...payload })
