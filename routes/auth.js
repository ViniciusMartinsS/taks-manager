const { Router } = require('express')
const router = Router()

const { login, logout, register } = require('../src/controller/auth')
const { formatErr, formatResponse } = require('../utils')

router.route('/login')
  .post(async (req, res) =>
    login(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(401).send(formatErr(err))
      )
  )

router.route('/register')
  .post(async (req, res) =>
    register(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )

router.route('/logout')
  .post(async (req, res) =>
    logout(req)
      .then(response =>
        res.send(formatResponse(response))
      )
      .catch(err =>
        res.status(400).send(formatErr(err))
      )
  )

module.exports = router
