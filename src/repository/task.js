'use strict'

const models = require('../../database/models')
const Task = models.Task

module.exports.findOne = payload =>
  Task.findOne({ ...payload })

module.exports.findAll = payload =>
  Task.findAll({ ...payload })

module.exports.create = payload =>
  Task.create({ ...payload })

module.exports.update = (payload, where) =>
  Task.update(payload, where)

module.exports.remove = payload =>
  Task.destroy({ ...payload })
