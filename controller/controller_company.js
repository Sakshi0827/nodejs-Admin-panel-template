exports.company_list = function (req, res) {
    res.locals = {  title: 'Company' };
    res.render('Company/company');
};
