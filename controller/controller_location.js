const Country = require('../models/country');
const State = require('../models/state');
const City = require('../models/city');


// Country LIST
exports.country_list = function (req, res) {
    res.locals = {  title: 'Country' };
    try{
         Country.findAll({ }).then(country => {
            console.log("All Country:", JSON.stringify(country, null, 4));
            return res.render('Location/country', {
                status: 200,
                data: country,
                message: "Country fetched successfully."
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

// Add country get
exports.add_country = function (req, res) {
    res.locals = {  title: 'Add Country' };
    res.render('Location/add_country');
};

// Add country post
exports.add_country_post = function (req, res) {
    res.locals = {  title: 'Add Country' };
    try{
        Country.create(req.body)
            .then(country => {
                console.log("New Country's auto-generated ID:", country.country_id);
                res.redirect('/country')
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

//delete country
exports.delete_country = function (req, res){
    console.log(`Attempting to destroy a country with country id: ${req.params.country_id}`);
    Country.destroy({
        where: {
            country_id: req.params.country_id
        }
    }).then((result) => {
        if(result){
            console.log("The country was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "country delete successful."
            })
        } else {
            console.log("country delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "country delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "country deletion failed."
        })
    });
};


//edit Country get
exports.edit_country = function(req, res) {
    res.locals = {  title: 'Edit Country' };
    console.log(req.params);
    try{
        Country.findAll({ where: {country_id: req.params.country_id } }).then(country => {
            console.log("country with country id: ",req.params.country_id, " is", JSON.stringify(country, null, 4));
            return res.render('Location/edit_country', {
                status: 200,
                data: country,
                message: "country fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "country fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//edit Country put
exports.edit_country_put = function(req, res) {
    res.locals = {title: 'Edit country'};
    console.log("------------",req.params, req.body);
    Country.findOne({ where: { country_id: req.params.country_id }})
        .then((result) => {
            if(result){
                result.update({
                    country_name:req.body.country_name
                });
                console.log("The country was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "country edit successful."
                })
            } else {
                console.log("country edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "country edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "country edit failed."
        })
    });
};




// State LIST
exports.state_list =  function (req, res) {
    res.locals = {  title: 'State' };
    try{
          State.findAll({  
            include: [
            {
                model: Country
            }
        ]}).then(state => {
            console.log("All States:", JSON.stringify(state, null, 4));
            return res.render('Location/state', {
                status: 200,
                data: state,
                message: "State fetched successfully."
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

// Add state get
exports.add_state = function (req, res) {
    res.locals = {  title: 'Add State' };
    try{
        Country.findAll({ }).then(country => {
            console.log("All Country:", JSON.stringify(country, null, 4));
            return res.render('Location/add_state', {
                status: 200,
                data: country,
                message: "Country fetched successfully."
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

// add state post
exports.add_state_post = function (req, res) {
    res.locals = {  title: 'Add State' };
    try{
        State.create(req.body)
            .then(state => {
                console.log("New state's auto-generated ID:", state.state_id);                
                if(!state.length){
                    res.redirect('/state')
                }
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "state fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//delete state
exports.delete_state = function (req, res){
    console.log(`Attempting to destroy a state with state id: ${req.params.state_id}`);
    State.destroy({
        where: {
            state_id: req.params.state_id
        }
    }).then((result) => {
        if(result){
            console.log("The state was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "state delete successful."
            })
        } else {
            console.log("state delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "state delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "state deletion failed."
        })
    });
};

//edit state get
exports.edit_state = function(req, res) {
    res.locals = {  title: 'Edit state' };
    console.log(req.params);
    try{
        State.findAll({ where: {state_id: req.params.state_id } }).then(state => {
            console.log("state with state id: ",req.params.state_id, " is", JSON.stringify(state, null, 4));
            Country.findAll({ }).then(country => {
                console.log("All country:", JSON.stringify(country, null, 4));
                Country.findAll({where:{country_id: state[0].country_id} }).then(country_result => {
                    console.log("country-------", JSON.stringify(country_result));
                    return res.render('Location/edit_state', {
                        status: 200,
                        data: state,
                        data2: country,
                        data3: country_result,
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
    }
};


//edit state put
exports.edit_state_put = function(req, res) {
    res.locals = {title: 'Edit State'};
    console.log("------------",req.params, req.body);
    State.findOne({ where: { state_id: req.params.state_id }})
        .then((result) => {
            if(result){
                result.update({
                    state_name:req.body.state_name,
                    country_id: req.body.country_id
                });
                console.log("The state was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "state edit successful."
                })
            } else {
                console.log("state edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "state edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "state edit failed."
        })
    });
};


//CITY LIST
exports.city_list = function (req, res) {
    res.locals = {  title: 'City' };
    try{
          City.findAll({  
            include: [
            {
                model: State,
                include: [
                {
                    model:Country
                }
            ]
        }
        ]
    }).then(city => {
            console.log("All Cities:", JSON.stringify(city, null, 4));
            return res.render('Location/city', {
                status: 200,
                data: city,
                message: "City fetched successfully."
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



// Add city get
exports.add_city = function (req, res) {
    res.locals = {  title: 'Add City' };
    try{
        Country.findAll({  }).then(country => {
            return res.render('Location/add_city', {
                status: 200,
                data: country,
                message: "Country fetched successfully."
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

//fetch state for add city dropdown
exports.fetch_state = function (req, res) {
    try {
        State.findAll({ where: {country_id: req.body.country_id }}).then(state => {
            console.log("fetched state are: ", state);
            return res.send({
                status: 200,
                data: state,
                message: "state fetched successfully."
            });
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "state fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
    }
};

//fetch-city

exports.fetch_city = function (req, res) {
    try {
        console.log("CCCCCCCCCCCCIIIIIIIIIITTTTTTTTYYYYYYY",req.body.state_id );
        City.findAll({ where: {state_id: req.body.state_id }}).then(city => {
            console.log("fetched city are: ", city);
            return res.send({
                status: 200,
                data: city,
                message: "city fetched successfully."
            });
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "city fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occurred, please contact the administrator.", exception);
    }
};

// add city post
exports.add_city_post = function (req, res) {
    res.locals = {  title: 'Add City' };
    try{
        console.log(req.body);
        City.create(req.body)
            .then(city => {
                console.log("New city's auto-generated ID:", city.city_id);
                res.redirect('/city')
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "city fetching failed."
            })
        })
    }
    catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};



//delete city
exports.delete_city = function (req, res){
    console.log(`Attempting to destroy a city with city id: ${req.params.city_id}`);
    City.destroy({
        where: {
            city_id: req.params.city_id
        }
    }).then((result) => {
        if(result){
            console.log("The city was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "city delete successful."
            })
        } else {
            console.log("city delete failed.", result);
            return res.json({
                status: 404,
                data: result,
                message: "city delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "city deletion failed."
        })
    });
};


//edit city get
exports.edit_city = function(req, res) {
    res.locals = {  title: 'Edit city' };
    console.log(req.params);
    try{
        City.findAll({ where: {city_id: req.params.city_id } }).then(city => {
            console.log("city with city id: ",req.params.city_id, " is", JSON.stringify(city, null, 4));
            Country.findAll({ }).then(country => {
                console.log("All country:", JSON.stringify(country, null, 4));
                State.findAll({where:{state_id: city[0].state_id} }).then(state_result => {
                    console.log("state-----", JSON.stringify(state_result));
                    Country.findAll({where:{country_id: state_result[0].country_id} }).then(country_result => {
                        console.log("country-------", JSON.stringify(country_result));
                        return res.render('Location/edit_city', {
                            status: 200,
                            data: city,
                            data3: country,
                            data4: state_result,
                            data5: country_result,
                        })
                    })
                })
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "city fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//edit city put
exports.edit_city_put = function(req, res) {
    res.locals = {title: 'Edit city'};
    console.log("------------",req.params, req.body);
    City.findOne({ where: { city_id: req.params.city_id }})
        .then((result) => {
            if(result){
                result.update({
                    city_name:req.body.city_name,

                    state_id: req.body.state_id
                });
                console.log("The city was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "city edit successful."
                })
            } else {
                console.log("city edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "city edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "city edit failed."
        })
    });
};

