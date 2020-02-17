const Slider = require('../models/slider');
const fs = require('fs');


// slider list
exports.slider_list = function (req, res) {
    res.locals = { title: 'slider List' };
    try {
        Slider.findAll({}).then(slider => {
            console.log("All slider:", JSON.stringify(slider, null, 4));
            return res.render('Slider/slider_list', {
                status: 200,
                data: slider,
                message: "slider fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "slider fetching failed."
            })
        })
    } catch (exception) {
        console.log("An exception occured, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "slider fetching failed."
        })
    }
};

// add slider get
exports.add_slider = function (req, res) {
    res.locals = { title: 'Add slider' };
    return res.render('Slider/add_slider');
};

//add slider post
exports.add_slider_post = (req, res) => {
    res.locals = { title: 'Add slider' };
    console.log('<----------->', req.file);
    Slider.create(
        {
            slider_title: req.body.slider_title,
            slider_image: req.file.filename
        }
    ).then(slider => {
        console.log("New slider's auto-generated ID:", slider.slider_id);
        return res.redirect(200, '/slider-list');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "New slider creation failed."
        })
    }).catch((exception) => {
        console.log("An exception was encountered during the synchronization", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "New slider creation failed."
        })
    })
};


// slider delete
exports.delete_slider = function (req, res) {
    console.log(`Attempting to destroy a slider with slider_id ${req.params.slider_id}`);
    Slider.findOne({
        where: {
            slider_id: req.params.slider_id
        }
    }).then(slider_fetched => {
        fs.unlink('uploads/' + slider_fetched.slider_image,
            err => { if (err) throw err })
    });
    Slider.destroy({
        where: {
            slider_id: req.params.slider_id
        }
    }).then((result) => {
        if (result) {
            console.log("The slider was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "slider delete successful."
            })
        } else {
            console.log("slider delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "slider delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "slider deletion failed."
        })
    });
};



// Edit slider get
exports.edit_slider = function (req, res) {
    res.locals = { title: 'Edit slider' };
    try {
        Slider.findAll({ where: { slider_id: req.params.slider_id } }).then(slider => {
            console.log("All slider:", JSON.stringify(slider, null, 4));
            return res.render('Slider/edit_slider', {
                status: 200,
                data: slider,
                message: "slider fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "slider fetching failed."
            })
        });
    } catch (exception) {
        console.log("An exception occured, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "slider fetching failed."
        })
    }
};





exports.edit_slider_put = function (req, res) {
    console.log("Edit slider put controller", req.body);
    res.locals = { title: 'Edit slider' };
    // console.log("------------",req.params, req.body);
    console.log("<----------------->", req.file);
    Slider.findOne({ where: { slider_id: req.params.slider_id } })
        .then((result) => {
            if (result) {
                if (req.file) {
                    Slider.findOne({
                        where: {
                            slider_id: req.params.slider_id
                        }
                    }).then(slider_fetched => {
                        fs.unlink('uploads/' + slider_fetched.slider_image,
                            err => { if (err) throw err })
                    });
                    result.update(
                        {
                            slider_title: req.body.slider_title,
                            slider_image: req.file.filename,
                        });
                } else {
                    result.update(
                        {
                            slider_title: req.body.slider_title
                        });
                }
                // console.log("The Blog was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "slider edit successful."
                })
            } else {
                console.log("slider edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "slider edit failed, no record found to edit."
                })
            }
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "slider edit failed."
            })
        });
};
