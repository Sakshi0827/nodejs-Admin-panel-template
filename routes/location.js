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
router.post('/add-state', controller_location.add_state_post);
router.post('/add-city', controller_location.add_city_post);
//delete
// router.delete('/delete-country:country_id', controller_location.delete_country);
// router.delete('/delete-state:state_id', controller_location.delete_state);
// router.delete('/delete-city:city_id', controller_location.delete_city);


module.exports = router;
