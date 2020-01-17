const express = require('express');
const router = express.Router();

const controller_location = require('../controller/controller_location');

//user-roles
router.get('/country', controller_location.country_list);
router.get('/state', controller_location.state_list);
router.get('/city', controller_location.city_list);
router.get('/add-country', controller_location.add_country);
router.get('/add-state', controller_location.add_state);
router.get('/add-city', controller_location.add_city);


module.exports = router;
