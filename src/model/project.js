'use strict'

const {
  create,
  findAll,
  findOne,
  update,
  remove
} = require('../repository/project')

module.exports.selectProjectData = async params => {
  const { id } = params

  const payload = {
    where: {
      ...(id && { id: id })
    }
  }

  return Object.keys(payload.where).length
    ? findOne(payload)
    : findAll(payload)
}

module.exports.createProjectData = async params => {
  return create(params)
  // console.log(response)
}

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
