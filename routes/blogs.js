const express = require('express');
const router = express.Router();

const controller_events = require('../controller/controller_blogs');

router.get('/blogs-list', controller_events.blogs_list);
router.get('/blogs-category', controller_events.blogs_category);
router.get('/add-blogs', controller_events.add_blogs);
router.get('/add-blogs-category', controller_events.add_blogs_category);


module.exports = router;
