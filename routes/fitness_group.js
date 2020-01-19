const express = require('express');
const router = express.Router();

const controller_fitnessGroup = require('../controller/controller_fitness_goup');

router.get('/fitness-group', controller_fitnessGroup.fitnessGroup_list);
router.get('/add-fitness-group', controller_fitnessGroup.add_fitnessGroup);
router.post('/add-fitness-group', controller_fitnessGroup.add_fitnessGroup_post);


module.exports = router;
