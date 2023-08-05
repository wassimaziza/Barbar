const { DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    'Rating',
    {
      idrating: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        defaultValue: 0,
      },
      review: {
        type: DataTypes.STRING(255),
        allowNull: true, 
      },
    },
    {
      tableName: 'rating', 
      timestamps: false, 
    }
  );


  return Rating;
};
