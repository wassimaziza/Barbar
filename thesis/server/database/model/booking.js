const { DataTypes, sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    'Booking',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('accepted', 'declined', 'pending'),
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      loyalty: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        defaultValue: 0,
      },
    },
    {
      tableName: 'booking', 
      timestamps: false, 
    }
  )
  return Booking
}
