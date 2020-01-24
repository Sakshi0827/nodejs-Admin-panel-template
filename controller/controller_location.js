const Country = require('../models/country');
const State = require('../models/state');
const City = require('../models/city');


exports.country_list = function (req, res) {
    res.locals = {  title: 'Country' };
    try{
        Country.sync({ force: false }).then((result) => {
            console.log("Result of sync", result);
            Country.findAll({ }).then(country => {
                console.log("All Country:", JSON.stringify(country, null, 4));
                if(!country.length){
                    return res.json({
                        status: 404,
                        message: "Country not found."
                    })
                }
                return res.render('Location/country', {
                    status: 200,
                    data: country,
                    message: "Country fetched successfully."
                })
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Country fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
    }
};

exports.state_list = function (req, res) {
    res.locals = {  title: 'State' };
    try{
        State.sync({ force: false }).then((result) => {
            console.log("Result of sync", result);
            State.findAll({ }).then(state => {
                console.log("All States:", JSON.stringify(state, null, 4));
                return res.render('Location/state', {
                    status: 200,
                    data: state,
                    message: "State fetched successfully."
                })
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "State fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
    }
};

exports.city_list = function (req, res) {
    res.locals = {  title: 'City' };try{
        City.sync({ force: false }).then((result) => {
            console.log("Result of sync", result);
            City.findAll({ }).then(city => {
                console.log("All City:", JSON.stringify(city, null, 4));
                return res.render('Location/city', {
                    status: 200,
                    data: city,
                    message: "City fetched successfully."
                })
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "City fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
    }
};

exports.add_country = function (req, res) {
    res.locals = {  title: 'Add Country' };
    res.render('Location/add_country');
};

exports.add_country_post = function (req, res) {
    res.locals = {  title: 'Add Country' };
    try{
        Country.sync({ force: false }).then((result) => {
            console.log("Result of sync", result);
            Country.create(req.body)
                .then(country => {
                    console.log("New Country's auto-generated ID:", country.country_id);                if(!country.length){
                        res.redirect('/country')
                    }
                })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Country fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

exports.add_state = function (req, res) {
    res.locals = {  title: 'Add State' };
    res.render('Location/add_state');
};

exports.add_city = function (req, res) {
    res.locals = {  title: 'Add City' };
    res.render('Location/add_city');
};
