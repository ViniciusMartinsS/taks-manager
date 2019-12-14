'use strict'

module.exports = {
  up: queryInterface =>
    queryInterface.addConstraint('ProjectTasks', [ 'taskId' ], {
      type: 'foreign key',
      name: 'taskId_projectTasks_fkey',
      references: {
        table: 'Tasks',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),

  down: queryInterface =>
    queryInterface.removeConstraint(
      'ProjectTasks', 'taskId_projectTasks_fkey'
    )
}
