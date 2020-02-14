const Event  = require('../models/event');
const Event_category  = require('../models/event_category');
const City = require('../models/city');


//Event list
exports.event_list = function (req, res) {
    res.locals = {  title: 'Event List' };
    try{
        Event.findAll({  
            include: [
                {
                  model: City
                },
                {
                  model:Event_category
                }
            ]
        }).then(event => {
            console.log("All event:", JSON.stringify(event, null, 4));
            return res.render('Event/event_list', {
                status: 200,
                data: event,
                message: "event fetched successfully."
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
        return res.json({
            status: 500,
            data: exception,
            message: "Event fetching failed."
        })
    }
};

//add - event get
exports.add_event = function (req, res) {
    res.locals = {  title: 'Add Event' };
    try{
        City.findAll({ }).then(city => {
            console.log("All cities:", JSON.stringify(city, null, 4));
            Event_category.findAll({ }).then(event_category => {
                console.log("All event categories:", JSON.stringify(event_category, null, 4));
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
                message: "City or Event category fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "City or Event category fetching failed."
        })
    }
};

// Add-event post
exports.add_event_post =  function (req, res) {
    try{
        Event.create(
                req.body
        ).then(event => {
            console.log("New event's auto-generated ID:", event.event_id);
            res.redirect(200, '/event-list');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event creation failed."
            })
        })
    }
    catch(exception) {
        console.log("An error was encountered during the synchronization", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "Event creation failed."
        })
    }
};

//event delete
exports.delete_event = function (req, res){
    console.log('Attempting to destroy an event with event_id:', req.params.event_id);
    Event.destroy({
        where: {
            event_id: req.params.event_id
        }
    }).then((result) => {
        if(result){
            console.log("The Event was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "Event delete successful."
            })
        } else {
            console.log("Event delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "Event delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Event deletion failed."
        })
    });
};

//edit event get
exports.edit_event = function(req, res) {
    res.locals = {  title: 'Edit Event' };
    try{
        Event.findAll({ where: {event_id: req.params.event_id } }).then(event => {
            console.log("event with event id: ",req.params.event_id, " is", JSON.stringify(event, null, 4));
            City.findAll({ }).then(city => {
                console.log("All city: ", JSON.stringify(city, null, 4));
                Event_category.findAll({ }).then(event_category => {
                    console.log("All event category: ", JSON.stringify(event_category, null, 4));
                    City.findAll({where:{city_id: event[0].city_id} }).then(city_result => {
                        console.log("Event's City: ", JSON.stringify(city_result, null, 4));
                        Event_category.findAll({where:{event_category_id: event[0].event_category_id} }).then(event_category_result => {
                            console.log("Event's category: ", JSON.stringify(event_category_result, null, 4));
                            return res.render('Event/edit_event', {
                                status: 200,
                                data: event,
                                data2: city,
                                data3: event_category,
                                data4: city_result,
                                data5: event_category_result,
                                message: "event fetched successfully."
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
                message: "event fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: err,
            message: "event fetching failed."
        })
    }
};


//edit event put
exports.edit_event_put = function(req, res) {
    res.locals = {title: 'Edit Event'};
    Event.findOne({ where: { event_id: req.params.event_id }})
        .then((result) => {
            if(result){
                result.update({
                    event_title:req.body.event_title,
                    event_description: req.body.event_description,
                    event_date: req.body.event_date,
                    city_id: req.body.city_id,
                    event_category_id: req.body.event_category_id
                });
                console.log("The Event was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "Event edit successful."
                })
            } else {
                console.log("Event edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "Event edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Event edit failed."
        })
    });
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
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event category fetching failed."
            })
        })
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "event category fetching failed."
        })
    }
};

// event_category get
exports.add_event_category =  function (req, res) {
    res.locals = {  title: 'Add Event Category' };
    res.render('Event/add_event_category.ejs');
};

// event_category post
exports.add_event_category_post =  function (req, res) {
    try {
        Event_category.create(
            req.body
        ).then(event_category_name => {
            console.log("New event category's auto-generated ID:", event_category_name.event_category_id);
            res.redirect(200, '/event-category');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event category creation failed."
            })
        })
    } catch(exception) {
        console.log("An error was encountered during the synchronization", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "event category creation failed."
        })
    }
};

//delete event_category
exports.delete_event_category = function (req, res){
    console.log('Attempting to destroy a event category with event_category id: ', req.params.event_category_id);
    Event_category.destroy({
        where: {
            event_category_id: req.params.event_category_id
        }
    }).then((result) => {
        if(result){
            console.log("The event category was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "event category delete successful."
            })
        } else {
            console.log("event category delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "event category delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "event category deletion failed."
        })
    });
};

//edit event category get
exports.edit_event_category = function(req, res) {
    res.locals = {  title: 'Edit Event Category' };
    console.log(req.params);
    try{
        Event_category.findAll({ where: {event_category_id: req.params.event_category_id } }).then(event_category => {
            console.log("event category with event category id: ",req.params.event_category_id, " is", JSON.stringify(event_category, null, 4));
            return res.render('Event/edit_event_category', {
                status: 200,
                data: event_category,
                message: "event category fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "event category fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
        return res.json({
            status: 500,
            data: exception,
            message: "event category fetching failed."
        })
    }
};

//edit event category put
exports.edit_event_category_put = function(req, res) {
    res.locals = {title: 'Edit Event Catgeory'};
    Event_category.findOne({ where: { event_category_id: req.params.event_category_id }})
        .then((result) => {
            if(result){
                result.update({
                    event_category_name: req.body.event_category_name
                });
                console.log("The Event Category was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "Event Category edit successful."
                })
            } else {
                console.log("Event Category edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "Event Category edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Event Category edit failed."
        })
    });
};

