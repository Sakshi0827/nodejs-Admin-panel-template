exports.company_list = function (req, res) {
    res.locals = {  title: 'Company' };
    res.render('Company/company');
};
exports.add_company = function (req, res) {
    res.locals = {  title: 'Add Company' };
    res.render('Company/add_company');
};
exports.add_company_post = function (req, res) {
    const companyName = req.body.companyName;
    console.log(companyName);
    //database code to insert data
    res.redirect('/company');
};
