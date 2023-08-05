const router = require('express').Router();
const work = require('../controller/work');


router.post('/add', work.addWork);
router.put('/update/:work_id', work.updateWork);
router.get('/barber/:barber_id', work.getWorksByBarberId);
router.get('/:work_id', work.getOneWork);

module.exports = router;
