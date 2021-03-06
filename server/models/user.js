'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  User.associate = (models) => {
    User.belongsTo(models.Organization, {
      foreignKey: 'orgId',
      onDelete: 'CASCADE',
    });
    User.hasMany(models.TodoItem, {
      foreignKey: 'assignedTo',
      as: 'todoItems',
    });
  };
  return User;
};