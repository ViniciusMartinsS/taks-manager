'use strict'

const { config } = require('dotenv')
config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const { userRouter } = require('../routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRouter)

app.listen(3000, () => {
  console.log('Server running on 3000')
})
