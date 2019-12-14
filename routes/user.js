
'use strict'

const { Router } = require('express')
const router = Router()

const { selectHandler, createHandler } = require('./default-handler')

router.route('/:id?')
  .get(async (req, res) => selectHandler(req, res, 'user'))
  .post(async (req, res) => createHandler(req, res, 'user'))

module.exports = router
