const Page = require('../models/page');
const User = require('../models/user');
const fs = require('fs');

// page list
exports.page_list = function (req, res) {
    res.locals = {  title: 'page List' };
    try{
        Page.findAll({
            include: [
            {
                model: User
            }],

        }).then(page => {
            // console.log("All blogs:", JSON.stringify(blogs, null, 4));
            // res.json(blogs);
            return res.render('Page/page_list', {
                status: 200,
                data: page,
                message: "page fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "page fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

// add page get
exports.add_page =  function (req, res) {
    res.locals = {  title: 'Add Page' };
    try{
        User.findAll({ }).then(user => {
            console.log("All user:", JSON.stringify(user, null, 4));
            return res.render('Page/add_page', {
                status: 200,
                data: user,
                message: "page fetched successfully."
            })
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "page fetching failed."
        })
    });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};
