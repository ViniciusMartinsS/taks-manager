'use strict'

const { compareSync, hashSync } = require('bcrypt')
const { selectUserData } = require('./user')
const { create } = require('../repository/user')
const { logout, selectTokens } = require('../repository/auth')
const { generateJWT } = require('../../utils')

const SALT_ROUNDS = 10

module.exports.authSelectUser = async params => {
  const response = await selectUserData({ email: params.email })

  if (!response) {
    throw new Error('User does not exist')
  }

  if (!isUserPasswordEqual(response, params)) {
    throw new Error('Invalid authentication')
  }

  const token = generateJWT(response)

  return { ...response.dataValues, token }
}

module.exports.authRegisterUser = async params => {
  const doesEmailAlreadyExist = await selectUserData({ email: params.email })

  if (doesEmailAlreadyExist) {
    throw new Error('Email already registered')
  }

  params.password = hashSync(params.password, SALT_ROUNDS)

  return create(params)
}

module.exports.authLogoutUser = async params =>
  logout(params)

module.exports.authBlackListTokens = async params => {
  const payload = {
    where: {
      token: params
    }
  }

  return selectTokens(payload)
}

function isUserPasswordEqual (params, args) {
  const { password: userPassword } = params.dataValues
  const { password: userSentPassword } = args

  return compareSync(userSentPassword, userPassword)
}
