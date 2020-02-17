const Slider = require('../models/slider');
const fs = require('fs');


// slider list
exports.slider_list = function (req, res) {
    res.locals = {  title: 'slider List' };
    try{
        Slider.findAll({ }).then(slider => {
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
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "slider fetching failed."
        })
    }
};

// add slider get
exports.add_slider =  function (req, res) {
    res.locals = {  title: 'Add slider' };
     return res.render('Blogs/add_blogs');           
};