const router = require('express').Router();
const barber = require('../controller/barber');
const { authenticateToken } = require('../jwtConfig/authenticateToken'); // Assuming you have authentication middleware

router.post('/login', barber.login);
router.post('/signup', barber.signup);
router.post('/signupShop', authenticateToken, barber.signupShop);
router.put('/updateBarberInfo', authenticateToken, barber.updateBarberInfo);
router.delete('/logout', authenticateToken, barber.logout);
router.get('/getBarberBookings', authenticateToken, barber.getBarberBookings);
router.put('/updateBookingStatus', authenticateToken, barber.updateBookingStatus);
router.delete('/cancelBooking/:bookingId', authenticateToken, barber.cancelBooking);
router.get('/getBarberProfile', authenticateToken, barber.getBarberProfile);
router.get('/getRatingByBarber', authenticateToken, barber.getRatingByBarber);
router.get('/getRatingsByClient/:client_idclient', authenticateToken, barber.getRatingsByClient);
router.post('/addWork', authenticateToken, barber.addWork);
router.put('/updateWork/:work_id', authenticateToken, barber.updateWork);
router.delete('/deleteWork/:work_id', authenticateToken, barber.deleteWork);

module.exports = router;
