'use strict'

const models = require('../../database/models')
const User = models.User

module.exports.findOne = payload =>
  User.findOne({ ...payload })

module.exports.findAll = payload =>
  User.findAll({ ...payload })

module.exports.create = payload =>
  User.create({ ...payload })
