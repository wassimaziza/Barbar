const { DataTypes, sequelize } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      idadmin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      tableName: 'admin', 
      timestamps: false, 
    }
  )
  return Admin
}
