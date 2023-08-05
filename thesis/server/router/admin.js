const router = require('express').Router();
const adminController = require('../controller/admin');

router.post("/login", adminController.login)
router.post("/add", adminController.addAdmin)
router.post("/getOneUser", adminController.getOneUser)

module.exports = router