'use strict'

const { compareSync } = require('bcrypt')
const { findOne } = require('../repository/auth')
const { generateJWT } = require('../../utils')

module.exports.authSelectUser = async params => {
  const payload = {
    attributes: [ 'id', 'email', 'password' ],
    where: {
      email: params.email
    }
  }

  const response = await findOne(payload)

  if (!response) {
    throw new Error('User does not exist')
  }

  if (!isUserPasswordEqual(response, params)) {
    throw new Error('Invalid authentication')
  }

  const token = generateJWT(response)

  return { ...response.dataValues, token }
}

function isUserPasswordEqual (params, args) {
  const { password: userPassword } = params.dataValues
  const { password: userSentPassword } = args

  return compareSync(userSentPassword, userPassword)
}
