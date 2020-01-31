const express = require('express');
const router = express.Router();

const user = require('../controller/controller_user');

//user-list
router.get('/user-list', user.user_list);

//user-roles
router.get('/user-roles', user.user_roles);

// add-user
router.get('/add-user', user.add_user);

router.post('/add-user', user.add_user_post);

//add-user-roles
router.get('/add-user-roles', user.add_user_roles);

router.post('/add-user-roles', user.add_user_roles_post);

//delete
// router.delete('/delete-user:user_id', controller_user.delete_user);
// router.delete('/delete-user-roles:user_role_id', controller_user.delete_user_roles);



module.exports = router;
