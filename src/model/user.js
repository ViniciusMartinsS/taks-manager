'use strict'

const { findAll, findOne } = require('../repository/user')

module.exports.selectUserData = async params => {
  const { id, name, email, password } = params

  const payload = {
    attributes: [ 'id', 'name', 'email' ],
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
