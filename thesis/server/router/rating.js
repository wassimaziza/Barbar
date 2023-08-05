const router = require('express').Router();
const rating = require('../controller/rating');


router.post('/add', rating.addRating)
router.get('/barber/:barber_id', rating.getRatingsByBarberId)
router.get('/client', rating.getRatingsByClientId)

module.exports = router;
