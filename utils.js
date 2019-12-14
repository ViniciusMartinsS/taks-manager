'use strict'

module.exports.formatErr = err => ({
  status: false,
  message: err && err.message || err
})

module.exports.formatResponse = result => ({
  status: true,
  result
})
