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
      .description('project name')
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

  delete: {
    id: Joi.number()
      .required()
      .description('The id of a project')
  }
})
