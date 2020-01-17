const express = require('express');
const router = express.Router();

const controller_location = require('../controller/controller_location');

//user-roles
router.get('/country', controller_location.country_list);

router.get('/state', controller_location.state_list);

router.get('/city', controller_location.city_list);


module.exports = router;
