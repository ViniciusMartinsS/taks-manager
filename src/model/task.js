'use strict'

const {
  create,
  findAll,
  update,
  remove
} = require('../repository/task')

module.exports.selectTaskData = async params => {
  const { id, description, done, endAt, projectId } = params

  const payload = {
    where: {
      ...(id && { id }),
      ...(description && { description }),
      ...(done && { done }),
      ...(endAt && { endAt }),
      ...(projectId && { projectId })
    }
  }

  return findAll(payload)
}

module.exports.createTaskData = async params =>
  create(params)

module.exports.updateTaskData = async params => {
  const { id, description, done, endAt } = params

  const payload = {
    ...(description && { description }),
    ...(done && { done }),
    ...(endAt && { endAt })
  }

  const where = { where: { id } }

  return update(payload, where)
}

module.exports.removeTaskData = async params => {
  const { id, projectId } = params

  const payload = {
    where: {
      id,
      ...(projectId && { projectId })
    }
  }

  return remove(payload)
}
