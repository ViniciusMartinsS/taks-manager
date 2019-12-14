'use strict'

const { hashSync } = require('bcrypt')
const { create, findAll, findOne } = require('../repository/user')

const SALT_ROUNDS = 10

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

  params.password = hashSync(params.password, SALT_ROUNDS)

  return create(params)
}

module.exports = {
  createUserData,
  selectUserData
}
