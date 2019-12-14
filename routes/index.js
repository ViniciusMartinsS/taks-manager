'use strict'

const loginRouter = require('./auth')
const projectRouter = require('./project')
const taskRouter = require('./task')
const userRouter = require('./user')

module.exports = {
  loginRouter,
  projectRouter,
  taskRouter,
  userRouter
}
