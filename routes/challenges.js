const express = require('express');
const router = express.Router();

const controller_challenges = require('../controller/controller_challenges');

router.get('/challenges', controller_challenges.challenges_list);
router.get('/add-challenges', controller_challenges.add_challenges);
router.post('/add-challenges', controller_challenges.add_challenges_post);
router.delete('/delete-challenges:challenge_id', controller_challenges.delete_challenges);
router.get('/edit-challenges:challenge_id', controller_challenges.edit_challenges);
router.put('/edit-challenges:challenge_id', controller_challenges.edit_challenges_put);


module.exports = router;
