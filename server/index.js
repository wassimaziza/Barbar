const cors=require("cors")
const express=require("express")
const app=express()
const {sequelize}=require("./database/index")
const PORT=process.env.PORT||3000
require('dotenv').config()
//!importing routes
const Client=require("./router/client")
const booking =require("./router/booking")
const Admin = require("./router/admin")
const barber = require("./router/barber")





//!middlewears
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*"}));

//!using routes
app.use("/client",Client) 
app.use("/booking",booking )
app.use("/admin",Admin)
app.use("/barber",barber)
  


app.listen(PORT, function () {
  console.log("Listening on port $",{PORT});
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
     sequelize.sync({ force: false}).then(()=> console.log('Models are synchronized with the database.')
     ) 
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

