const express = require('express');
const router = express.Router();

const controller_company = require('../controller/controller_company');

router.get('/company', controller_company.company_list);
router.get('/add-company', controller_company.add_company);
router.post('/add-company', controller_company.add_company_post);
router.delete('/delete-company:company_id', controller_company.delete_company);
router.get('/edit-company:company_id', controller_company.edit_company);
router.put('/edit-company:company_id', controller_company.edit_company_put);

module.exports = router;
