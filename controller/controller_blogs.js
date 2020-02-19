const Blogs = require('../models/blogs');
const Blogs_category = require('../models/blogs_category');
const Blogs_category_intermediate = require('../models/blogs_category_intermediate');
const User = require('../models/user');
const fs = require('fs');

// blogs list
exports.blogs_list = function (req, res) {
    res.locals = {  title: 'Blog List' };
    try{
        Blogs.findAll({
            include: [{
                model: Blogs_category,
            },
            {
                model: User
            }],

        }).then(blogs => {
            // console.log("All blogs:", JSON.stringify(blogs, null, 4));
            // res.json(blogs);
            return res.render('Blogs/blogs_list', {
                status: 200,
                data: blogs,
                message: "blogs fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Blogs fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

// add BLOGS get
exports.add_blogs =  function (req, res) {
    res.locals = {  title: 'Add Blogs' };
    try{
        User.findAll({ }).then(user => {
            console.log("All user:", JSON.stringify(user, null, 4));
        Blogs_category.findAll({ }).then(blogs_category => {
        console.log("All blogs_category:", JSON.stringify(blogs_category, null, 4));
        
         return res.render('Blogs/add_blogs', {
            status: 200,
            data: blogs_category,
            data2: user,
            message: "blogs_category fetched successfully."
        })
    })
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "blogs fetching failed."
        })
    });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//add blogs post
exports.add_blogs_post =  (req, res) =>{
    res.locals = {  title: 'Add Blogs' };
    console.log('<----------->', req.file);
    Blogs.create(
        {
            user_id: req.body.user_id,
            blogs_title: req.body.blogs_title,
            blogs_description: req.body.blogs_description,
            blogs_post_date : req.body.blogs_post_date,
            blogs_image: req.file.filename
        }
    ).then(blogs => {
        console.log("New Blog's auto-generated ID:", blogs.blogs_id);
        for(let i=0; i<req.body.blogs_category_id.length; i++){
            Blogs_category_intermediate.create(
            {
                blogs_id: blogs.blogs_id,
                blogs_category_id: req.body.blogs_category_id[i]
            });
        }
        return res.redirect('/blogs-list');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "New Blogs creation failed."
        })
    }).catch((exception) => {
        console.log("An exception was encountered during the synchronization", exception);
    })
};

// blogs delete
exports.delete_blogs = function (req, res){
    console.log(`Attempting to destroy a blog with blogs_id ${req.params.blogs_id}`);
    Blogs.findOne({ where: {
            blogs_id: req.params.blogs_id
        }}).then(blog_fetched =>{
            fs.unlink('uploads/'+ blog_fetched.blogs_image,
                    err => {if (err) throw err }
    )});
    Blogs.destroy({
        where: {
            blogs_id: req.params.blogs_id
        }
    }).then((result) => {
        if(result){
            console.log("The blog was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "blog delete successful."
            })
        } else {
            console.log("blog delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "blog delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "blog deletion failed."
        })
    });
};

// Edit blogs get
exports.edit_blogs = function (req, res) {
    res.locals = {  title: 'Edit Blog' };
    try{
        User.findAll({}).then(users => {
            // console.log("All Users:", JSON.stringify(users, null, 4));
            Blogs.findAll({
                where: {blogs_id: req.params.blogs_id},
                include: [{
                    model: Blogs_category
                }]
            }).then(blogs_result => {
                console.log("Blog Fetched:", JSON.stringify(blogs_result, null, 4));
                User.findAll({where: {user_id: blogs_result[0].user_id}}).then(user_result => {
                    console.log("User Fetched:", JSON.stringify(user_result, null, 4));
                    Blogs_category.findAll({}).then(blogs_category => {
                        console.log("All blogs category:", JSON.stringify(blogs_category, null, 4));
                        return res.render('Blogs/edit_blogs', {
                            status: 200,
                            data: blogs_result,
                            data2: users,
                            data3: user_result,
                            data4: blogs_category,
                            message: "blogs fetched successfully."
                        })
                    })
                })
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Blogs fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};


//edit blogs put
exports.edit_blogs_put = function (req, res) {
    console.log("Edit blogs put controller", req.body);
    res.locals = {  title: 'Edit Blog' };
    // console.log("------------",req.params, req.body);
    console.log("<----------------->",req.file);
    Blogs.findOne({ where: { blogs_id: req.params.blogs_id }})
        .then((result) => {

            if(result){
                if(req.file){
                result.update(
                    {
                        user_id: req.body.user_id,
                        blogs_title: req.body.blogs_title,
                        blogs_description: req.body.blogs_description,
                        blogs_post_date: req.body.blogs_post_date,
                        blogs_image: req.file.filename,
                    }
                    ).then(()=>{
                        if(req.body.blogs_category_id.length===1){
                            Blogs_category_intermediate.destroy({where: {blogs_id: req.params.blogs_id}});
                            Blogs_category_intermediate.create(
                                {
                                    blogs_id: req.params.blogs_id,
                                    blogs_category_id: req.body.blogs_category_id
                                });
                        }
                        for (let i = 0; i < req.body.blogs_category_id.length; i++) {
                            Blogs_category_intermediate.destroy({where: {blogs_id: req.params.blogs_id}});
                            Blogs_category_intermediate.create(
                            {
                                blogs_id: req.params.blogs_id,
                                blogs_category_id: req.body.blogs_category_id[i]
                            });
                        }
                    });
                }else {
                    result.update(
                        {
                            user_id: req.body.user_id,
                            blogs_title: req.body.blogs_title,
                            blogs_description: req.body.blogs_description,
                            blogs_post_date: req.body.blogs_post_date
                        }
                    ).then(() => {
                        Blogs_category_intermediate.destroy({where: {blogs_id: req.params.blogs_id}});
                        if(req.body.blogs_category_id.length===1){
                            Blogs_category_intermediate.create(
                                {
                                    blogs_id: req.params.blogs_id,
                                    blogs_category_id: req.body.blogs_category_id
                                });
                        }
                        for (let i = 0; i < req.body.blogs_category_id.length; i++) {
                            Blogs_category_intermediate.create(
                            {
                                blogs_id: req.params.blogs_id,
                                blogs_category_id: req.body.blogs_category_id[i]
                            });
                        }
                    });
                }
                // console.log("The Blog was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "Blog edit successful."
                })
            } else {
                console.log("Blog edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "Blog edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Blog edit failed."
        })
    });
};


// blogs category list
exports.blogs_category =  function (req, res) {
    res.locals = {  title: 'Blog Category' };
    try{
        Blogs_category.findAll({ }).then(blogs_category => {
        console.log("All blogs_category:", JSON.stringify(blogs_category, null, 4));
        return res.render('Blogs/blogs_category', {
            status: 200,
            data: blogs_category,
            message: "blogs_category fetched successfully."
        })
    }).catch(err => {
    console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "company fetching failed."
        })
    });
    } catch (exception){
            console.log("An exception occured, please contact the administrator.", exception);
    }
};

// add blogs category get
exports.add_blogs_category =  function (req, res) {
    res.locals = {  title: 'Add Blogs Category' };
    res.render('Blogs/add_blogs_category');
};

//add blogs category POST
exports.add_blogs_category_post =  function (req, res) {
    Blogs_category.create(
            req.body
        ).then(blogs_category_name => {
            console.log("New Blog Category's auto-generated ID:", blogs_category_name.blogs_category_id);
            return res.redirect('/blogs-category');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "New Blogs Category creation failed."
            })
        }).catch((exception) => {
            console.log("An exception was encountered during the synchronization", exception);
    })
};


//blog_catgory delete

exports.delete_blogs_category = function (req, res){
    console.log(`Attempting to destroy a company with blogs_category_id ${req.params.blogs_category_id}`);
    Blogs_category.destroy({
        where: {
            blogs_category_id: req.params.blogs_category_id
        }
    }).then((result) => {
        if(result){
            console.log("The blog category was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "blog category delete successful."
            })
        } else {
            console.log("blog category delete failed.", result)
            return res.json({
                status: 404,
                data: result,
                message: "blog category delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "blog category deletion failed."
        })
    });
};

//edit blogs category
exports.edit_blogs_category =  function (req, res) {
    res.locals = {  title: 'Edit Blog Category' };
    try{
        Blogs_category.findAll({ where:{blogs_category_id : req.params.blogs_category_id}}).then(blogs_category => {
            console.log("All blogs_category:", JSON.stringify(blogs_category, null, 4));
            return res.render('Blogs/edit_blogs_category', {
                status: 200,
                data: blogs_category,
                message: "blogs_category fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "company fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

// edit blogs category put
exports.edit_blogs_category_put =  function (req, res) {
    res.locals = {title: 'Edit Blog Category'};
    Blogs_category.findOne({ where: { blogs_category_id: req.params.blogs_category_id }})
        .then((result) => {
            if(result){
                result.update({
                    blogs_category_name:req.body.blogs_category_name,
                });
                console.log("The blogs_category_name was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "blogs_category_name edit successful."
                })
            } else {
                console.log("blogs_category_name edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "blogs_category_name edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "blogs_category_name edit failed."
        })
    });
};
