var express = require('express');
var router = express.Router();

const user = require('../controller/user');

//user-list
router.get('/user-list', user.user_list);

//user-roles
router.get('/user-roles', user.user_roles);

// add-user
router.get('/add-user', user.add_user);

//add-user-roles
router.get('/add-user-roles', user.add_user_roles);


module.exports = router;
