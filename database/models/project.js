'use strict'

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {})

  Project.associate = models => {
    Project.belongsTo(models.User)
    Project.hasMany(models.Task)
  }

  return Project
}
