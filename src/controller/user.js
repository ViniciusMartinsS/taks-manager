'use strict'

const { schemaValidator } = require('../../schemas')
const { selectUserData } = require('../model/user')

module.exports.show = async req => {
  const params = schemaValidator(req, 'user', 'select')
  return selectUserData(params)
}
