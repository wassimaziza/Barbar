const router = require('express').Router()
const client= require('../controller/client')

//!login
router.post("/login",client.getOne)
//!! signup
router.post("/signup",client.Add)
//! delete client
router.delete('/delete/:id',client.deleteAccount)
//! update
router.put("/update",client.updateProfile)


module.exports=router