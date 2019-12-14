
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
  .get(async (req, res) => selectHandler(req, res, 'project'))
  .post(async (req, res) => createHandler(req, res, 'project'))
  .put(async (req, res) => updateHandler(req, res, 'project'))
  .delete(async (req, res) => removeHandler(req, res, 'project'))

module.exports = router
