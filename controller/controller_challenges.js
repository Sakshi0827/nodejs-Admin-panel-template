exports.challenges_list = function (req, res) {
    res.locals = {  title: 'Challenges' };
    res.render('Challenges/challenges');
};
exports.add_challenges = function (req, res) {
    res.locals = {  title: 'Add Challenges' };
    res.render('Challenges/add_challenges');
};
