
'use strict'

const { Router } = require('express')
const router = Router()

const { selectHandler } = require('./default-handler')

router.route('/:id?')
  .get(async (req, res) => selectHandler(req, res, 'user'))

module.exports = router
