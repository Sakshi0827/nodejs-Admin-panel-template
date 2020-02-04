const Event  = require('../models/event');
const Event_category  = require('../models/event_category');
const City = require('../models/city')

exports.event_list = function (req, res) {
    res.locals = {  title: 'Event List' };
    try{
        Event.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
            Event.findAll({ }).then(event => {
                console.log("All event:", JSON.stringify(event, null, 4));
                return res.render('Event/event_list', {
                    status: 200,
                    data: event,
                    message: "event fetched successfully."
                })
            })
        }).catch(err => {
                console.error('Unable to connect to the database:', err);
                return res.json({
                    status: 500,
                    data: err,
                    message: "event fetching failed."
                })
            });
        } catch (exception){
            console.log("An exception occured, please contact the administrator.", exception);
    }
};


//add - event get
exports.add_event = function (req, res) {
    res.locals = {  title: 'Add Event' };
    try{
        City.findAll({ }).then(city => {
            console.log("All city:", JSON.stringify(city, null, 4));
            Event_category.findAll({ }).then(event_category => {
                console.log("All event_category:", JSON.stringify(event_category, null, 4));
                return res.render('Event/add_event', {
                    status: 200,
                    data: event_category,
                    data2: city,
                    message: "city fetched successfully."
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

//event_category list

exports.event_category =  function (req, res) {
    res.locals = {  title: 'Event Category List' };
    try{
         Event_category.findAll({ }).then(event_category => {
                console.log("All event_category:", JSON.stringify(event_category, null, 4));
                return res.render('Event/event_category', {
                    status: 200,
                    data: event_category,
                    message: "event_category fetched successfully."
                })
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
                return res.json({
                    status: 500,
                    data: err,
                    message: "event_category fetching failed."
                })
            });
        } catch (exception){
            console.log("An exception occured, please contact the administrator.", exception);
        }

};

// event_category get
exports.add_event_category =  function (req, res) {
    res.locals = {  title: 'Add Event Category' };
    res.render('Event/add_event_category.ejs');
};



// event_category post
exports.add_event_category_post =  function (req, res) {
        Event_category.create(
            req.body
        ).then(event_category_name => {
            console.log("New event_category's auto-generated ID:", event_category_name.event_category_id);
            // return res.json({
            //     status: 200,
            //     data: event_category_name,
            //     message: "event_category created successfully."
            // })
            res.redirect('/event-category');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event_category creation failed."
            })
        })
    .catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })
};

//delete event_category
exports.delete_event_category = function (req, res){
    console.log(`Attempting to destroy a event_category with event_category id: ${req.params.event_category_id}`);
    Event_category.destroy({
        where: {
            event_category_id: req.params.event_category_id
        }
    }).then((result) => {
        if(result){
            console.log("The event_category was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "event_category delete successful."
            })
        } else {
            console.log("event_category delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "event_category delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "event_category deletion failed."
        })
    });
};

