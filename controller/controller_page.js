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


//add page post
exports.add_page_post =  (req, res) =>{
    res.locals = {  title: 'Add page' };
    console.log('<----------->', req.file);
    Page.create(
        {
            user_id: req.body.user_id,
            page_title: req.body.page_title,
            page_content: req.body.page_content,
            page_image: req.file.filename
        }
    ).then(page => {
        console.log("New page's auto-generated ID:", page.page_id);
        return res.redirect('/page-list');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "New page creation failed."
        })
    }).catch((exception) => {
        console.log("An exception was encountered during the synchronization", exception);
    })
};

// page delete
exports.delete_page = function (req, res){
    console.log(`Attempting to destroy a page with page_id ${req.params.page_id}`);
    Page.findOne({ where: {
        page_id: req.params.page_id
        }}).then(page_fetched =>{
            fs.unlink('uploads/'+ page_fetched.page_image,
                    err => {if (err) throw err }
    )});
    Page.destroy({
        where: {
            page_id: req.params.page_id
        }
    }).then((result) => {
        if(result){
            console.log("The page was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "page delete successful."
            })
        } else {
            console.log("page delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "page delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "page deletion failed."
        })
    });
};



// Edit page get
exports.edit_page = function (req, res) {
    res.locals = {  title: 'Edit page' };
    try{
        User.findAll({}).then(users => {
            // console.log("All Users:", JSON.stringify(users, null, 4));
            Page.findAll({
                where: {page_id: req.params.page_id}
            }).then(page_result => {
                console.log("page Fetched:", JSON.stringify(page_result, null, 4));
                User.findAll({where: {user_id: page_result[0].user_id}}).then(user_result => {
                    console.log("User Fetched:", JSON.stringify(user_result, null, 4));
                        return res.render('Page/edit_page', {
                            status: 200,
                            data: page_result,
                            data2: users,
                            data3: user_result,
                            message: "page fetched successfully."
                        })
                    })
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

//edit page put
exports.edit_page_put = function (req, res) {
    console.log("Edit page put controller", req.body);
    res.locals = {  title: 'Edit page' };
    // console.log("------------",req.params, req.body);
    console.log("<----------------->",req.file);
    Page.findOne({ where: { page_id: req.params.page_id }})
        .then((result) => {

            if(result){
                if(req.file){
                result.update(
                    {
                        user_id: req.body.user_id,
                        page_title: req.body.page_title,
                        page_content: req.body.page_content,
                        page_image: req.file.filename,
                    }
                    )
                }else {
                    result.update(
                        {
                            user_id: req.body.user_id,
                            page_title: req.body.page_title,
                            page_content: req.body.page_content,
                        }
                    )
                }
                // console.log("The Blog was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "page edit successful."
                })
            } else {
                console.log("page edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "page edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "page edit failed."
        })
    });
};
