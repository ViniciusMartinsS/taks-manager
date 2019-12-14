'use strict'

const { create, findAll, findOne } = require('../repository/user')

async function selectUserData (params) {
  const { id, name, email, password } = params

  const payload = {
    where: {
      ...(id && { id: id }),
      ...(name && { name: name }),
      ...(email && { email: email }),
      ...(password && { password: password })
    }
  }

  return Object.keys(payload.where).length
    ? findOne(payload)
    : findAll(payload)
}

async function createUserData (params) {
  const doesEmailAlreadyExist = await selectUserData({ email: params.email })

  if (doesEmailAlreadyExist) {
    throw new Error('Email already registered')
  }

  return create(params)
}

module.exports = {
  createUserData,
  selectUserData
}
