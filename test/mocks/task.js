'use strict'

module.exports = {
  create: {
    valid: {
      body: {
        description: 'task test',
        projectId: 1
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
        done: true,
        endAt: '2019-12-25 06:00:00'
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
