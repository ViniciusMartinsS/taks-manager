'use strict'

const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY
const { token } = require('../src/controller/auth')

module.exports.validateAuthToken = async (req, res, next) => {
  try {
    const jwtToken = await token(req.headers.authorization)

    if (jwtToken) {
      throw new Error()
    }

    jwt.verify(req.headers.authorization, JWT_KEY)
    next()
  } catch (err) {
    return res.status(401).send({
      status: false,
      message: 'Invalid Authorization Token'
    })
  }
}
