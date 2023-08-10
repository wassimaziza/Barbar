const { DataTypes, sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Barber = sequelize.define(
    'Barber',
    {
      idbarber: {
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
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      shop_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      shop_logo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      profile_pic: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      diploma: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      idCard: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isInt: true,
          len: [8, 8],
        }
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      tableName: 'barber', 
      timestamps: false, 
    }
  )
  return Barber
}
