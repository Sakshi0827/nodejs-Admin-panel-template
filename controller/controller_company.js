const Company  = require('../models/company');


exports.company_list = function (req, res) {
    res.locals = {  title: 'Company' };
    try{
        Company.findAll({ }).then(company => {
            console.log("All company:", JSON.stringify(company, null, 4));
            return res.render('Company/company', {
                status: 200,
                data: company,
                message: "company fetched successfully."
            })
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "company fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

exports.add_company = function (req, res, next) {
    res.locals = {  title: 'Add Company' };
    res.render('Company/add_company');
};

exports.add_company_post = function (req, res) {
        Company.create(
            req.body
        ).then(company => {
            console.log("New Company's auto-generated ID:", company.company_id);
            res.redirect('/company');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Company creation failed."
            })
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })
};

