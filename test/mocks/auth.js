'use strict'

module.exports = {
  register: {
    valid: {
      body: {
        name: 'test',
        email: `test${Math.random()}@gmail.com`,
        password: '12345'
      }
    },

    invalid: {}
  },

  login: {
    valid: {
      body: {
        password: '12345'
      }
    }
  }
}
