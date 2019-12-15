'use strict'

const Joi = require('@hapi/joi')

module.exports.schemaValidator = (req, entity, schema) => {
  const params = defineParams(req)
  const schemaValidation = require(`./${entity}`)[schema]

  const { error } =
    Joi.validate(params, schemaValidation, { abortEarly: false })

  if (error && error.isJoi) {
    throw new Error('Invalid payload')
  }

  return params
}

function defineParams (req) {
  return {
    ...(req && req.body && { ...req.body }),
    ...(req && req.params && req.params.id && { ...req.params }),
    ...(req && req.query && { ...req.query })
  }
}
