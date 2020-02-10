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
router.delete('/delete-country:country_id', controller_location.delete_country);
router.delete('/delete-state:state_id', controller_location.delete_state);
router.delete('/delete-city:city_id', controller_location.delete_city);

router.post('/fetch-state', controller_location.fetch_state);
router.post('/fetch-city', controller_location.fetch_city);

// edit
router.get('/edit-country:country_id', controller_location.edit_country);
router.get('/edit-state:state_id', controller_location.edit_state);
router.get('/edit-city:city_id', controller_location.edit_city);

router.put('/edit-country:country_id', controller_location.edit_country_put);
router.put('/edit-state:state_id', controller_location.edit_state_put);
router.put('/edit-city:city_id', controller_location.edit_city_put);



module.exports = router;
