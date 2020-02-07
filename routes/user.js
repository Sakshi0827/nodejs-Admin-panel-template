const express = require('express');
const router = express.Router();

const controller_user = require('../controller/controller_user');

//user-list
router.get('/user-list', controller_user.user_list);

//user-roles
router.get('/user-roles', controller_user.user_roles);

// add-user
router.get('/add-user', controller_user.add_user);

router.post('/add-user', controller_user.add_user_post);

//add-user-roles
router.get('/add-user-roles', controller_user.add_user_roles);

router.post('/add-user-roles', controller_user.add_user_roles_post);

//delete

router.delete('/delete-user-role:user_role_id', controller_user.delete_user_role);

router.delete('/delete-user:user_id', controller_user.delete_user);

//edit get

router.get('/edit-user-roles:user_role_id', controller_user.edit_user_role);

router.put('/edit-user-roles:user_role_id', controller_user.edit_user_role_put);

router.get('/edit-user:user_id', controller_user.edit_user);

router.put('/edit-user:user_id', controller_user.edit_user_put);





module.exports = router;
