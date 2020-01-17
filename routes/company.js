const express = require('express');
const router = express.Router();

const controller_company = require('../controller/controller_company');

router.get('/company', controller_company.company_list);
router.get('/add-company', controller_company.add_company);


module.exports = router;
