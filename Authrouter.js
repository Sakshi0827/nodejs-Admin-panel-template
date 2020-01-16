var express = require('express');
var Authrouter = express.Router();

//Authentications all TABs.
Authrouter.get('/pages-login', function(req, res)
{
      res.locals = {  title: 'Login' };
      res.render('Auth/login');
});
Authrouter.get('/pages-lock-screen', function(req, res)
{
      res.locals = {  title: 'Lock Screen' };
      res.render('Auth/pages_lock_screen');
});
Authrouter.get('/pages-recoverpw', function(req, res)
{
      res.locals = {  title: 'Password Recovery' };
      res.render('Auth/pages_recoverpw');
});
Authrouter.get('/pages-404', function(req, res)
{
      res.locals = {  title: '404 Page Error' };
      res.render('Auth/pages_404');
});
Authrouter.get('/pages-500', function(req, res)
{
      res.locals = {  title: '500 Page Error' };
      res.render('Auth/pages_500');
});

module.exports = Authrouter;