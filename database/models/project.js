'use strict'

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {})

  Project.associate = models => {
    Project.hasMany(models.Task)
  }

  return Project
}
