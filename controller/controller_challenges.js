exports.challenges_list = function (req, res) {
    res.locals = {  title: 'Challenges' };
    res.render('Challenges/challenges');
};
