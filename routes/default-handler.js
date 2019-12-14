'use strict'

const { formatErr, formatResponse } = require('../utils')

module.exports.selectHandler = (req, res, entity) => {
  const { show } = require(`../src/controller/${entity}`)

  return show(req)
    .then(response =>
      res.send(formatResponse(response))
    )
    .catch(err =>
      res.status(400).send(formatErr(err))
    )
}

module.exports.createHandler = (req, res, entity) => {
  const { create } = require(`../src/controller/${entity}`)

  return create(req)
    .then(response =>
      res.send(formatResponse(response))
    )
    .catch(err =>
      res.status(400).send(formatErr(err))
    )
}
