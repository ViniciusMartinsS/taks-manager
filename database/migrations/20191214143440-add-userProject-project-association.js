'use strict'

module.exports = {
  up: queryInterface =>
    queryInterface.addConstraint('UserProjects', [ 'projectId' ], {
      type: 'foreign key',
      name: 'projectId_userProject_fkey',
      references: {
        table: 'Projects',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),

  down: queryInterface =>
    queryInterface.removeConstraint(
      'UserProjects', 'projectId_userProject_fkey'
    )
}
