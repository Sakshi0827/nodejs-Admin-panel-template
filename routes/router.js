const express = require('express');
const router = express.Router();

const userRouter = require('./user.js');
const locationRouter = require('./location');
const fitnessGroupRouter = require('./fitness_group');
const companyRouter = require('./company');
const challengesRouter = require('./challenges');
const eventsRouter = require('./events');
const blogsRouter = require('./blogs');
const paymentRouter = require('./payment');
const sliderRouter = require('./slider' );
const pageRouter = require('./page');

// Dashboard
router.get('/', function (req, res) {
    res.locals = {  title: 'Dashboard' };
    res.render('Dashboard/dashboard');
});
// User
router.use('/', userRouter);
// // Location
router.use('/', locationRouter);
// // Events
router.use('/', eventsRouter);
// //Fitness Group
router.use('/', fitnessGroupRouter);
// //Company
router.use('/', companyRouter);
// //Challenges
router.use('/', challengesRouter);
// //Blogs
router.use('/', blogsRouter);
// //payment
router.use('/', paymentRouter);
// slider
router.use('/', sliderRouter);
//page
router.use('/', pageRouter);
module.exports = router;
