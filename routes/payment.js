const express = require('express');
const router = express.Router();

const controller_payment = require('../controller/controller_payment');

router.get('/payment', controller_payment.payment_list);
//

module.exports = router;
