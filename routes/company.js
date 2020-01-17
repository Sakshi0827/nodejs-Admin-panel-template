const express = require('express');
const router = express.Router();

const controller_company = require('../controller/controller_company');

router.get('/company', controller_company.company_list);

module.exports = router;
