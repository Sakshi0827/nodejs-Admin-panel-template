var app = require('express')();
var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var bCrypt = require('bcryptjs');
var bodyParser = require('body-parser');
const multer = require('multer');
var router = require('./routes/router.js');
var Authrouter = require('./Authrouter.js');

const Country = require('./models/country');
const State = require('./models/state');
const City = require('./models/city');
const Event = require('./models/event');
const Event_category = require('./models/event_category');
const Blogs = require('./models/blogs');
const Blogs_category = require('./models/blogs_category');
// const User = require('./models/user');
// const User_role = require('./models/user_role');
const Fitness_group = require('./models/fitness_group');
const Company = require('./models/company');



// Access public folder from root
app.use('/public', express.static('public'));
app.use('/public', express.static('views'));
app.get('/layouts/', function(req, res) {
  res.render('view');
});
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//DB connection
require('./config/connection');

//Associations
require('./models/Associations')();
//state
Country.hasMany(State, { foreignKey: "country_id"});
State.belongsTo(Country, { foreignKey: "country_id"});
//city
State.hasMany(City, {foreignKey: "state_id"});
City.belongsTo(State, {foreignKey: "state_id"});
//event
Event.hasMany(Event_category, { foreignKey: "event_category_id"});
Event_category.hasMany(Event, { foreignKey: "event_category_id"});
Event.belongsTo(City, { foreignKey: "city_id" });
City.hasMany(Event, { foreignKey: "city_id" });
//blogs
Blogs.hasMany(Blogs_category, { foreignKey: "blogs_category_id"});
Blogs_category.belongsTo(Blogs, { foreignKey: "blogs_category_id"});
// User.hasMany(Blogs, {foreignKey: "user_id"});
// Blogs.belongsTo(User, {foreignKey: "user_id"});
//User
// User.hasOne(Fitness_group, { foreignKey: "fitness_group_id"});
// User.hasOne(Company, { foreignKey: "company_id"});
// User.hasOne(Country, { foreignKey: "country_id"});
// User.hasOne(State, { foreignKey: "state_id"});
// User.hasOne(City, { foreignKey: "city_id"});
// Fitness_group.belongsTo(User, {foreignKey: "fitness_group_id"});
// Company.belongsTo(User, {foreignKey: "company_id"});
// Country.belongsTo(User, {foreignKey: "country_id"});
// State.belongsTo(User, {foreignKey: "state_id"});
// City.belongsTo(User, {foreignKey: "city_id"});



// Add Authentication Route file with app
app.use('/', Authrouter); 

//For set layouts of html view
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Add Route file with app
app.use('/', router); 




http.listen(3000, function(){
  console.log('listening on *:3000');
});
