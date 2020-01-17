exports.country_list = function (req, res) {
    res.locals = {  title: 'Country' };
    res.render('Location/country');
};
exports.state_list = function (req, res) {
    res.locals = {  title: 'State' };
    res.render('Location/state');
};
exports.city_list = function (req, res) {
    res.locals = {  title: 'City' };
    res.render('Location/city');
};
