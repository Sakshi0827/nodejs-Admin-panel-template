const User_role  = require('../models/user_role');
const User = require('../models/user');
const Fitness_group = require('../models/fitness_group');
const Country = require('../models/country');
const State = require('../models/state');
const City = require('../models/city');
const Company = require('../models/company');


//user list get

exports.user_list = function (req, res) {
    res.locals = {  title: 'User List' };
    try{
        User.findAll({  
          include: [
          {
              model: Fitness_group
          },  
          {
              model: Company
          },
          {
              model: User_role
          },
          {     
              model: City,
                    include: [
                    {
                        model:State,
                        include: [
                            {
                            model: Country
                        }]
                    }]
          }

      ]
  }).then(user => {
            console.log("All user:", JSON.stringify(user, null, 4));
            return res.render('User/user_list', {
                status: 200,
                data: user,
                message: "user fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "user fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

  


//add user get

exports.add_user = function (req, res) {
    res.locals = {  title: 'User Roles' };
    try{
        Fitness_group.findAll({ }).then(fitness_group => {
            console.log("All fitness_group:", JSON.stringify(fitness_group, null, 4));
            Country.findAll({ }).then(country => {
                console.log("All country:", JSON.stringify(country, null, 4));
                Company.findAll({ }).then(company => { 
                    console.log("All company:", JSON.stringify(company, null, 4));
                    User_role.findAll({ }).then(user_role => {
                        console.log("All user_role:", JSON.stringify(user_role, null, 4));
                        return res.render('User/add_user', {
                            status: 200,
                            data1: fitness_group,
                            data2: country,
                            data5: company,
                            data6: user_role,
                            message: "fetched successfully."
                        })
                    })
                })
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event_category fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
    }
};

//add user post
exports.add_user_post = function (req, res) {
    console.log(req.body);
    //DB
        User.create(
            req.body,
        ).then(user_name => {
            console.log("New user's auto-generated ID:", user_name.user_id);
            res.redirect('/user-list');  
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "user creation failed."
            })
        })
    .catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    });
};

//user roles list get
exports.user_roles = function (req, res) {
    res.locals = {title: 'User Roles'};
    try{
        User_role.findAll({ }).then(user_role => {
            console.log("All user_role:", JSON.stringify(user_role, null, 4));
            return res.render('User/user_roles', {
                status: 200,
                data: user_role,
                message: "user_roles fetched successfully."
            })
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "user_roles fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//add user roles get
exports.add_user_roles = function (req, res) {
    res.locals = {title: 'User Roles'};
    res.render('User/add_user_roles');
};

//add user roles post
exports.add_user_roles_post = function (req, res) {
    const userRole = req.body.userRole;
    console.log(req.body);
    //DB
        User_role.create(
            req.body,
        ).then(user_role_name => {
            console.log("New user_role's auto-generated ID:", user_role_name.user_role_id);
        
            // res.redirect('/user_roles');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "user_role creation failed."
            })
        })
    .catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    });
};

//Delete user roles
exports.delete_user_roles = function (req, res){
    console.log(`Attempting to destroy a User role with user role id ${req.params.user_role_id}`);
    User_role.destroy({
        where: {
            user_role_id: req.params.user_role_id
        }
    }).then((result) => {
        if(result){
            console.log("The User role was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "User role delete successful."
            })
        } else {
            console.log("User role delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "User role delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "User role deletion failed."
        })
    });
};
