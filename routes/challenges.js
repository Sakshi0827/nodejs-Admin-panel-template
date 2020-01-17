const express = require('express');
const router = express.Router();

const controller_challenges = require('../controller/controller_company');

router.get('/challenges', controller_challenges.company_list);

module.exports = router;
