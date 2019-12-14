'use strict'

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.TEXT,
    done: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, {})

  return Task
}
