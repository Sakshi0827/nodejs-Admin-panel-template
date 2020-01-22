var async = require('async');

const Company = require('../models/company');


exports.company_list = function (req, res) {
    res.locals = {  title: 'Company' };
    res.render('Company/company');
};
exports.add_company = function (req, res, next) {
    res.locals = {  title: 'Add Company' };
    res.render('Company/add_company');
};
exports.add_company_post = function (req, res) {
    const companyName = req.body.companyName;
    console.log(companyName);
    //database code to insert dataconsole.log("Attempting to add company.");
    Company.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
        Company.create(
            req.body
        ).then(company_test => {
            console.log("New Company's auto-generated ID:", company_test.company_id);
            return res.json({
                status: 200,
                data: company_test,
                message: "User Role created successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Company creation failed."
            })
        });
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })
};
