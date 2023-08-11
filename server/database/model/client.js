const { DataTypes, sequelize } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    'Client',
    {
      idclient: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      profile_pic: {
        type: DataTypes.STRING(255),
        allowNull: true, 
      },
      phone_number: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: 'client', 
      timestamps: false,
    }
  )

  return Client
}
