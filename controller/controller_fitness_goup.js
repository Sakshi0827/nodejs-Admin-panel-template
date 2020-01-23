const Fitness_group = require('../models/fitness_group');

exports.fitnessGroup_list = function (req, res) {
    res.locals = {  title: 'Fitness Group' };
    res.render('Fitness-group/fitness_group');
};
exports.add_fitnessGroup = function (req, res) {
    res.locals = {  title: 'Add Fitness Group' };
    res.render('Fitness-group/add_fitness_group');
};
exports.add_fitnessGroup_post = function (req, res) {
    const fitness_group_name = req.body.fitness_group_name;
    console.log(req.body);
    //DB
    Fitness_group.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
        Fitness_group.create(
            req.body
        ).then(fitness_group_name => {
            console.log("New Fitness Group's auto-generated ID:", fitness_group_name.fitness_group_id);
            return res.json({
                status: 200,
                data: fitness_group_name,
                message: "New Fitness Group created successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "New Fitness Group creation failed."
            })
        });
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })
};
