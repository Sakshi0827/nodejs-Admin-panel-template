const User_role  = require('../models/user_role');

//user list get
exports.user_list = function(req, res) {
    res.locals = {  title: 'User List' };
    res.render('User/user_list',{list:[{id:101,name:"abc"}]});
};

//add user get
exports.add_user = function (req, res) {
    res.locals = {title: 'User Roles'};
    res.render('User/add_user');
};

//add user post
exports.add_user_post = function (req, res) {
    // const userRole = req.body.userRole;
    console.log(req.body);
    //DB
    res.redirect('/user-list');
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

//add user roles get
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
    })
    res.redirect('/user-roles');

};
