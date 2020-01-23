const Event_category  = require('../models/event_category');


exports.event_list = function (req, res) {
    res.locals = {  title: 'Event List' };
    res.render('Event/event_list');
};

exports.event_category =  function (req, res) {
    res.locals = {  title: 'Event Category List' };
    res.render('Event/event_category');
};

exports.add_event =  function (req, res) {
    res.locals = {  title: 'Add Event' };
    res.render('Event/add_event.ejs');
};

exports.add_event_category =  function (req, res) {
    res.locals = {  title: 'Add Event Category' };
    res.render('Event/add_event_category.ejs');
};

exports.add_event_category_post =  function (req, res) {
    const event_category_name = req.body.event_category_name;
    console.log(req.body);

    Event_category.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
        Event_category.create(
            req.body
        ).then(event_category_name => {
            console.log("New event_category's auto-generated ID:", event_category_name.event_category_id);
            return res.json({
                status: 200,
                data: event_category_name,
                message: "event_category created successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event_category creation failed."
            })
        });
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })

    
    //DB
    // res.redirect('/event-category');
};

