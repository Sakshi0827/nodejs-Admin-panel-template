var express = require('express');
var Authrouter = express.Router();
const User = require('./models/user');


//Authentications all TABs.
Authrouter.get('/login', function(req, res){
      res.locals = {  title: 'Login' };
      res.render('Auth/login',{
            status: 500,
            message: ""
      });
});
Authrouter.post('/login', function(req, res){
      try{
            User.findOne({ where:{
                        email: req.body.email,
                        password: req.body.password
                  }
            }).then((user)=>{
                  console.log("User found:", JSON.stringify(user, null, 4));
                  if(user.length>1){
                        res.redirect(200, '/');
                  }
            }).catch((err)=>{
                  console.log("User not found");
                  return res.render('Auth/login', {
                        status: 500,
                        data: err,
                        message: "Username or Password doesn't match!! Try Again."
                  })
            })
      } catch(exception){
            console.log("An exception occured, please contact the administrator.", exception);
      }
});

Authrouter.get('/logout', (req, res)=>{
   //session destroy
   res.redirect(200,'/login');
});

Authrouter.get('/pages-recoverpw', function(req, res)
{
      res.locals = {  title: 'Password Recovery' };
      res.render('Auth/pages_recoverpw');
      //send email for password recovery
});



Authrouter.get('/pages-lock-screen', function(req, res)
{
      res.locals = {  title: 'Lock Screen' };
      res.render('Auth/pages_lock_screen');
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
