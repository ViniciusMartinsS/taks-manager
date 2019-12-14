'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {})

  UserProject.associate = models => {
    UserProject.belongsTo(models.User)
    UserProject.belongsTo(models.Project)
  }

  return UserProject
}
