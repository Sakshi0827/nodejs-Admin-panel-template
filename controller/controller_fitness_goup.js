exports.fitnessGroup_list = function (req, res) {
    res.locals = {  title: 'Fitness Group' };
    res.render('Fitness-group/fitness_group');
};
exports.add_fitnessGroup = function (req, res) {
    res.locals = {  title: 'Add Fitness Group' };
    res.render('Fitness-group/add_fitness_group');
};
exports.add_fitnessGroup_post = function (req, res) {
    const fitnessGroupName = req.body.fitnessGroupName;
    console.log(req.body);
    //DB
    res.redirect('/fitness-group');
};
