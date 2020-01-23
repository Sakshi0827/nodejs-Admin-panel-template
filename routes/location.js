const express = require('express');
const router = express.Router();

const controller_location = require('../controller/controller_location');

//get list
router.get('/country', controller_location.country_list);
router.get('/state', controller_location.state_list);
router.get('/city', controller_location.city_list);
//get add-list
router.get('/add-country', controller_location.add_country);
router.get('/add-state', controller_location.add_state);
router.get('/add-city', controller_location.add_city);
//post add-list
router.post('/add-country', controller_location.add_country_post);


module.exports = router;
