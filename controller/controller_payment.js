exports.payment_list = function (req, res) {
    res.locals = {  title: 'Payment' };
    res.render('payment/payment');
};
exports.add_payment = function (req, res) {
    res.locals = {  title: 'Add Payment' };
    res.render('payment/add_payment');
};
// exports.add_challenges_post = function (req, res) {
//     const challengeTilte = req.body.challengeTilte;
//     const challengePrice = req.body.challengePrice;
//     const challengeDescription = req.body.challengeDescription;
//     const challengeNote = req.body.challengeNote;
//     console.log(req.body);
//     res.redirect('/challenges');
// };
