const express = require('express');
const router = express.Router();

const controller_events = require('../controller/controller_event');

router.get('/blog-list', controller_events.event_list);
router.get('/blog-category', controller_events.event_category);

module.exports = router;
