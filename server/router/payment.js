const express = require('express');
const router = express.Router();
const konnectPaymentController = require('../controller/payment');


router.post('/initiatePayment', konnectPaymentController.initiatePayment);

module.exports = router;
