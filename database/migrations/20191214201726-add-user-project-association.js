'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'Projects',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    ),

  down: queryInterface =>
    queryInterface.removeColumn(
      'Projects',
      'userId'
    )
}
