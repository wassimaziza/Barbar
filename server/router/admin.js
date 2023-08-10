const router = require('express').Router();
const adminController = require('../controller/admin');

router.post("/login", adminController.login);
router.delete("/barber/:barberId", adminController.deleteBarber)
router.get("/barber/:barberId/bookings", adminController.getBarberBookings);
router.get("/barber/:barberId/points", adminController.getBarberPoints);
// router.get("/loggedInUsers", adminController.getAllLoggedInUsers)


module.exports = router