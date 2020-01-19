const express = require('express');
const router = express.Router();

const controller_challenges = require('../controller/controller_challenges');

router.get('/challenges', controller_challenges.challenges_list);
router.get('/add-challenges', controller_challenges.add_challenges);
router.post('/add-challenges', controller_challenges.add_challenges_post);

module.exports = router;
