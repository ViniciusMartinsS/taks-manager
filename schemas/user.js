'use strict'

const Joi = require('@hapi/joi')

module.exports = ({
  select: {
    id: Joi.number()
      .optional()
      .description('The id of a user')
  }
})
