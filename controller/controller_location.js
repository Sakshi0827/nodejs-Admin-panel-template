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
exports.add_country = function (req, res) {
    res.locals = {  title: 'Add Country' };
    res.render('Location/add_country');
};
exports.add_state = function (req, res) {
    res.locals = {  title: 'Add State' };
    res.render('Location/add_state');
};
exports.add_city = function (req, res) {
    res.locals = {  title: 'Add City' };
    res.render('Location/add_city');
};
