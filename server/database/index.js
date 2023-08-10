const { DataTypes, Sequelize } = require("sequelize")
const sequelize = new Sequelize('barber', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})
const db = {}
//! Models
db.sequelize = sequelize
db.client = require("../database/model/client")(sequelize, DataTypes)
db.barber = require("../database/model/barber")(sequelize, DataTypes)
db.rating = require("../database/model/rating")(sequelize, DataTypes)
db.Admin = require("../database/model/admin")(sequelize, DataTypes)
db.work = require("../database/model/work")(sequelize, DataTypes)
db.booking = require("../database/model/booking")(sequelize, DataTypes)

//! Relations
db.client.hasMany(db.booking, { foreignKey: "client_idclient" })
db.client.hasMany(db.rating, { foreignKey: "client_idclient" })
db.booking.belongsTo(db.client, { foreignKey: "client_idclient" })
db.rating.belongsTo(db.client, { foreignKey: "client_idclient" })
db.barber.hasMany(db.work, { foreignKey: 'barber_idbarber' })
db.barber.hasMany(db.booking, { foreignKey: 'barber_idbarber' })
db.barber.hasMany(db.rating, { foreignKey: 'barber_idbarber' })



sequelize.query("CREATE DATABASE IF NOT EXISTS barber")
  .then(() => {
  })
  .catch((error) => {
    console.error('Unable to create the database:', error)
    sequelize.close()
  })
 
module.exports={sequelize,db} 
