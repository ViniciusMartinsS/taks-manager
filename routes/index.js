'use strict'

const loginRouter = require('./auth')
const projectRouter = require('./project')
const userRouter = require('./user')

module.exports = {
  loginRouter,
  projectRouter,
  userRouter
}
