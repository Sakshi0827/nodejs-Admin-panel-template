const express = require('express');
const router = express.Router();

const controller_blogs = require('../controller/controller_blogs');

router.get('/blogs-list', controller_blogs.blogs_list);
router.get('/blogs-category', controller_blogs.blogs_category);
router.get('/add-blogs', controller_blogs.add_blogs);
router.get('/add-blogs-category', controller_blogs.add_blogs_category);


module.exports = router;
