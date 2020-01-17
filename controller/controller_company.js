exports.company_list = function (req, res) {
    res.locals = {  title: 'Company' };
    res.render('Company/company');
};
exports.add_company = function (req, res) {
    res.locals = {  title: 'Add Company' };
    res.render('Company/add_company');
};
