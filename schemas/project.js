'use strict'

const Joi = require('@hapi/joi')

module.exports = ({
  select: {
    id: Joi.number()
      .optional()
      .description('The id of a project')
  },

  create: {
    name: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('name')
      .required()
      .description('project name'),

    userId: Joi.number()
      .required()
      .description('The id of a user')
  },

  update: {
    id: Joi.number()
      .required()
      .description('The id of a project'),

    name: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('name')
      .required()
      .description('project name')
  },

  remove: {
    id: Joi.number()
      .required()
      .description('The id of a project')
  }
})
