'use strict'

const { config } = require('dotenv')
config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.listen(3000, () => {
  console.log('Server running on 3000')
})
