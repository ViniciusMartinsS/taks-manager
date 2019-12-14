'use strict'

module.exports = {
  up: queryInterface =>
    queryInterface.addConstraint('UserProjects', [ 'userId' ], {
      type: 'foreign key',
      name: 'userId_userProject_fkey',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),

  down: queryInterface =>
    queryInterface.removeConstraint(
      'UserProjects', 'userId_userProject_fkey'
    )
}
