'use strict'

const { config } = require('dotenv')
config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const { validateAuthToken } = require('../middleware')
const { loginRouter, projectRouter, taskRouter, userRouter } = require('../routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', loginRouter)
app.use('/projects', validateAuthToken, projectRouter)
app.use('/tasks', validateAuthToken, taskRouter)
app.use('/users', validateAuthToken, userRouter)

app.listen(3000, () => {
  console.log('Server running on 3000')
})
