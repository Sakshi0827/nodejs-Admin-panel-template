const express = require('express');
const router = express.Router();

const controller_fitnessGroup = require('../controller/controller_fitness_group');

router.get('/fitness-group', controller_fitnessGroup.fitnessGroup_list);
router.get('/add-fitness-group', controller_fitnessGroup.add_fitnessGroup);
router.post('/add-fitness-group', controller_fitnessGroup.add_fitnessGroup_post);
router.delete('/delete-fitness-group:fitness_group_id', controller_fitnessGroup.delete_fitnessGroup);
router.get('/edit-fitness-group:fitness_group_id', controller_fitnessGroup.edit_fitnessGroup);
router.put('/edit-fitness-group:fitness_group_id', controller_fitnessGroup.edit_fitnessGroup_put);


module.exports = router;
