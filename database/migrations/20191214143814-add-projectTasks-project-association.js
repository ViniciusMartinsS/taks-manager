'use strict'

module.exports = {
  up: queryInterface =>
    queryInterface.addConstraint('ProjectTasks', [ 'projectId' ], {
      type: 'foreign key',
      name: 'projectId_projectTasks_fkey',
      references: {
        table: 'Projects',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),

  down: queryInterface =>
    queryInterface.removeConstraint(
      'ProjectTasks', 'projectId_projectTasks_fkey'
    )
}
