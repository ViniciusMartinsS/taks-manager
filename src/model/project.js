'use strict'

const {
  create,
  findAll,
  update,
  remove
} = require('../repository/project')

module.exports.selectProjectData = async params => {
  const { id, name, userId } = params

  const payload = {
    where: {
      ...(id && { id }),
      ...(userId && { userId }),
      ...(name && { name })
    }
  }

  return findAll(payload)
}

module.exports.createProjectData = async params =>
  create(params)

module.exports.updateProjectData = async params => {
  const { id, name } = params

  const payload = { name }
  const where = { where: { id } }

  return update(payload, where)
}

module.exports.removeProjectData = async params => {
  const { id } = params

  const payload = {
    where: { id }
  }

  return remove(payload)
}
