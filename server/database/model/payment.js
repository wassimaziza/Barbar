const { DataTypes, sequelize } = require('sequelize');


module.exports= (sequelize,DataTypes)=>{
const KonnectPayment = sequelize.define(
  'KonnectPayment',
  {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'payment', 
    timestamps: false,
  }
)
return KonnectPayment
}

