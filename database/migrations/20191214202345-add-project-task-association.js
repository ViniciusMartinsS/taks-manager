'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'Tasks',
      'projectId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    ),

  down: queryInterface =>
    queryInterface.removeColumn(
      'Tasks',
      'projectId'
    )
}
