'use strict'

const Joi = require('@hapi/joi')

module.exports = ({
  select: {
    id: Joi.number()
      .optional()
      .description('The id of a user')
  },

  create: {
    name: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('name')
      .required()
      .description('user name'),

    email: Joi.string()
      .trim()
      .email()
      .label('email')
      .required()
      .description('user email'),

    password: Joi.string()
      .min(4)
      .max(64)
      .label('password')
      .required()
      .description('user password')
  }
})
