exports.fitnessGroup_list = function (req, res) {
    res.locals = {  title: 'Fitness Group' };
    res.render('Fitness-group/fitness_group');
};
exports.add_fitnessGroup = function (req, res) {
    res.locals = {  title: 'Add Fitness Group' };
    res.render('Fitness-group/add_fitness_group');
};
