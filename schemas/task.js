'use strict'

const Joi = require('@hapi/joi')

module.exports = ({
  select: {
    id: Joi.number()
      .optional()
      .description('The id of a project'),

    projectId: Joi.number()
      .optional()
      .description('The id of a project'),

    done: Joi.boolean()
      .default(false)
      .allow(null)
      .optional()
      .description('task done')
  },

  create: {
    description: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('description')
      .required()
      .description('task description'),

    projectId: Joi.number()
      .required()
      .description('The id of a project')
  },

  update: {
    id: Joi.number()
      .required()
      .description('The id of a project'),

    description: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('description')
      .optional()
      .description('task description'),

    done: Joi.boolean()
      .default(false)
      .allow(null)
      .optional()
      .description('task done'),

    endAt: Joi.date()
      .allow(null)
      .label('endAt date')
      .optional()
      .description('endAt date, formats: YYYY-MM-DD; DD-MM-YYYY')
  },

  remove: {
    id: Joi.number()
      .required()
      .description('The id of a project'),

    projectId: Joi.number()
      .optional()
      .description('The id of a user')
  }
})
