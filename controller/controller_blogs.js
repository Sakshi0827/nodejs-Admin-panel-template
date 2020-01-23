const Blogs_category = require('../models/blogs_category');

exports.blogs_list = function (req, res) {
    res.locals = {  title: 'Blog List' };
    res.render('Blogs/blogs_list');
};

exports.blogs_category =  function (req, res) {
    res.locals = {  title: 'Blog Category' };
    res.render('Blogs/blogs_category');
};

exports.add_blogs =  function (req, res) {
    res.locals = {  title: 'Add Blogs' };
    res.render('Blogs/add_blogs');
};

exports.add_blogs_category =  function (req, res) {
    res.locals = {  title: 'Add Blogs Category' };
    res.render('Blogs/add_blogs_category');
};

exports.add_blogs_category_post =  function (req, res) {
    // const blogs_category_name = req.body.blogs_category_name;
    // console.log(req.body);
    //DB
    Blogs_category.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
        Blogs_category.create(
            req.body
        ).then(blogs_category_name => {
            console.log("New Blog Category's auto-generated ID:", blogs_category_name.blogs_category_id);
            return res.json({
                status: 200,
                data: blogs_category_name,
                message: "New Blogs Category created successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "New Blogs Category creation failed."
            })
        });
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })
};
