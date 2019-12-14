'use strict'

module.exports = (sequelize, DataTypes) => {
  const ProjectTask = sequelize.define('ProjectTask', {
    projectId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {})

  ProjectTask.associate = models => {
    ProjectTask.belongsTo(models.Project)
    ProjectTask.belongsTo(models.Task)
  }

  return ProjectTask
}
