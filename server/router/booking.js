const router = require('express').Router();
const bookingController = require('../controller/booking')


router.post('/create', bookingController.addBooking)
router.put('/update/:id', bookingController.updateBooking)
router.delete('/delete/:id', bookingController.deleteBooking)
router.put('/update-status/:id', bookingController.updateBookingStatus)
router.get('/client', bookingController.getClientBookings)

module.exports = router;