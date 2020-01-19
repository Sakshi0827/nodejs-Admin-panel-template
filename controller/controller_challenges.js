exports.challenges_list = function (req, res) {
    res.locals = {  title: 'Challenges' };
    res.render('Challenges/challenges');
};
exports.add_challenges = function (req, res) {
    res.locals = {  title: 'Add Challenges' };
    res.render('Challenges/add_challenges');
};
exports.add_challenges_post = function (req, res) {
    const challengeTilte = req.body.challengeTilte;
    const challengePrice = req.body.challengePrice;
    const challengeDescription = req.body.challengeDescription;
    const challengeNote = req.body.challengeNote;
    console.log(req.body);
    res.redirect('/challenges');
};
