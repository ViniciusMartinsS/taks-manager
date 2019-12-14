'use strict'

const models = require('../../database/models')
const Project = models.Project

module.exports.findOne = payload =>
  Project.findOne({ ...payload })

module.exports.findAll = payload =>
  Project.findAll({ ...payload })

module.exports.create = payload =>
  Project.create({ ...payload })

module.exports.update = (payload, where) =>
  Project.update(payload, where)

module.exports.remove = payload =>
  Project.destroy({ ...payload })
