const { DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define(
    'Work',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true, 
      },
      video: {
        type: DataTypes.STRING(255),
        allowNull: true, 
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true, 
      },
      haircut_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        defaultValue: 0,
      },
    },
    {
      tableName: 'work', 
      timestamps: false, 
    }
  )


  return Work
}