
'use strict'

const { Router } = require('express')
const router = Router()

const {
  selectHandler,
  createHandler,
  updateHandler,
  removeHandler
} = require('./default-handler')

router.route('/:id?')
  .get(async (req, res) => selectHandler(req, res, 'task'))
  .post(async (req, res) => createHandler(req, res, 'task'))
  .put(async (req, res) => updateHandler(req, res, 'task'))
  .delete(async (req, res) => removeHandler(req, res, 'task'))

module.exports = router
