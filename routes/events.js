const express = require('express');
const router = express.Router();

const controller_event = require('../controller/controller_event');


router.get('/event-list', controller_event.event_list);
router.get('/event-category', controller_event.event_category);
router.get('/add-event', controller_event.add_event);
router.get('/add-event-category', controller_event.add_event_category);
router.post('/add-event-category', controller_event.add_event_category_post);
// router.delete('/delete-event:event_id', controller_event.delete_event);
router.delete('/delete-event-category:event_category_id', controller_event.delete_event_category);


module.exports = router;
