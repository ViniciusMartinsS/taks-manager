'use strict'

module.exports = {
  create: {
    valid: {
      body: {
        name: 'test',
        userId: 1
      }
    },

    invalid: {}
  },

  show: {
    valid: {
      body: {
        id: 1
      }
    }
  },

  update: {
    valid: {
      body: {
        name: 'test-update'
      }
    }
  },

  remove: {
    valid: {
      body: {
        id: 1
      }
    }
  }
}
