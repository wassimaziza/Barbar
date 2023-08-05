const router = require('express').Router();
const barber= require('../controller/barber')

//! login
router.post("/login",barber.getOne)
//!signup 
router.post("/signup",barber.addBarber)
//!delete barber
router.delete('/delete/:id',barber.deleteBarber)
//!update barber
router.put('/update/:id' ,barber.updateBarber)


module.exports=router