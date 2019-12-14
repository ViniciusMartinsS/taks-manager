'use strict'

const Joi = require('@hapi/joi')

module.exports = ({
  login: {
    email: Joi.string()
      .trim()
      .email()
      .label('email')
      .required()
      .description('user email for logging in'),

    password: Joi.string()
      .min(4)
      .max(64)
      .label('password')
      .required()
      .description('user password for logging in')
  },

  register: {
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
