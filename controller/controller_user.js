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
                            data:{message:""},
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
    res.locals = {  title: 'User Roles' };
    console.log(req.body);
    //DB
        User.create(
            req.body,
        ).then(user_name => {
            console.log("New user's auto-generated ID:", user_name.user_id);
            res.redirect('/user-list');  
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
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
                                data:err,
                                data1: fitness_group,
                                data2: country,
                                data5: company,
                                data6: user_role,
                                message: "user creation failed."
                            })
                        })
                    })
                })
            })
        })
    .catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    });
};


//delete user
exports.delete_user = function (req, res){
    console.log(`Attempting to destroy a user with user id: ${req.params.user_id}`);
    User.destroy({
        where: {
            user_id: req.params.user_id
        }
    }).then((result) => {
        if(result){
            console.log("The user was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "User delete successful."
            })
        } else {
            console.log("User delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "User delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "User deletion failed."
        })
    });
};

//edit user get
exports.edit_user = function(req, res) {
    res.locals = {  title: 'Edit User' };
    console.log(req.params);
    try{
        User.findAll({ where: {user_id: req.params.user_id } }).then(user => {
            console.log("user with user id: ",req.params.user_id, " is", JSON.stringify(user, null, 4));
            Fitness_group.findAll({ }).then(fitness_group => {
                console.log("All fitness group:", JSON.stringify(fitness_group, null, 4));
                Country.findAll({ }).then(country => {
                    console.log("All country:", JSON.stringify(country, null, 4));
                    Company.findAll({ }).then(company => { 
                        console.log("All company:", JSON.stringify(company, null, 4));
                        User_role.findAll({ }).then(user_role => {
                            console.log("All user_role:", JSON.stringify(user_role, null, 4));
                            Fitness_group.findAll({ where: {fitness_group_id: user[0].fitness_group_id } }).then(fitness_group_result => {
                                console.log("Fitness group is------", JSON.stringify(fitness_group_result, null, 4));
                                City.findAll({ where: {city_id: user[0].city_id } }).then(city_result => {
                                    console.log("City is------", JSON.stringify(city_result, null, 4));
                                    State.findAll({ where: {state_id: user[0].state_id } }).then(state_result => {
                                        console.log("state is------", JSON.stringify(state_result, null, 4));  
                                        Country.findAll({ where: {country_id: user[0].country_id } }).then(country_result => {
                                            console.log("Country is------", JSON.stringify(country_result, null, 4)); 
                                            Company.findAll({ where: {company_id: user[0].company_id } }).then(company_result => {
                                                console.log("company result is------", JSON.stringify(company_result, null, 4));
                                                User_role.findAll({ where: {user_role_id: user[0].user_role_id } }).then(User_role_result => {
                                                    console.log("User role is------", JSON.stringify(User_role_result, null, 4));                           
                                                    return res.render('User/edit_user', {
                                                        status: 200,
                                                        data: user,
                                                        data1: fitness_group,
                                                        data2: country,
                                                        data3: company,
                                                        data4: user_role,
                                                        data5: fitness_group_result,
                                                        data6: city_result,
                                                        data7: state_result,
                                                        data8: country_result,
                                                        data9: company_result,
                                                        data10: User_role_result,
                                                        message: "user fetched successfully."
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
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

//edit user put
exports.edit_user_put = function(req, res) {
    res.locals = {title: 'User Company'};
    console.log("------------",req.params, req.body);
    User.findOne({ where: { user_id: req.params.user_id }})
        .then((result) => {
            if(result){
                result.update(
                    // company_name:req.body.company_name
                    req.body
                );
                console.log("The User was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "User edit successful."
                })
            } else {
                console.log("User edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "User edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "User edit failed."
        })
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
    res.render('User/add_user_roles', {message:""});
};

//add user roles post
exports.add_user_roles_post = function (req, res) {
    res.locals = {title: 'User Roles'};
    const userRole = req.body.userRole;
    console.log(req.body);
    //DB
        User_role.create(
            req.body,
        ).then(user_role_name => {
            console.log("New user_role's auto-generated ID:", user_role_name.user_role_id);
        
            res.redirect('/user-roles');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.render('User/add_user_roles',{
                status: 500,
                data: err,
                message: "User Role must be unique"
            })
        })
    .catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    });
};

//delete USER_ROLES
exports.delete_user_role = function (req, res){
    console.log(`Attempting to destroy a user_role with usrr role id: ${req.params.user_role_id}`);
    User_role.destroy({
        where: {
            user_role_id: req.params.user_role_id
        }
    }).then((result) => {
        if(result){
            console.log("The user role was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "user_role delete successful."
            })
        } else {
            console.log("user_role delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "user_role delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "user_role deletion failed."
        })
    });
};

//edit user role get
exports.edit_user_role = function(req, res) {
    res.locals = {  title: 'Edit User role' };
    console.log(req.params);
    try{
        User_role.findAll({ where: {user_role_id: req.params.user_role_id } }).then(user_role => {
            console.log("user role with user role id: ",req.params.user_role_id, " is", JSON.stringify(user_role, null, 4));
            return res.render('User/edit_user_role', {
                status: 200,
                data: user_role,
                message: "user role fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "user role fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//edit user role put
exports.edit_user_role_put = function(req, res) {
    res.locals = {title: 'Edit User role'};
    console.log("------------",req.params, req.body);
    User_role.findOne({ where: { user_role_id: req.params.user_role_id }})
        .then((result) => {
            if(result){
                result.update({
                    user_role_name:req.body.user_role_name
                });
                console.log("The User role was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "User role edit successful."
                })
            } else {
                console.log("User role edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "User role edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "User role edit failed."
        })
    });
};

