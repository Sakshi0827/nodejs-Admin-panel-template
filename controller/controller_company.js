const Company  = require('../models/company');


exports.company_list = function (req, res) {
    res.locals = {  title: 'Company' };

    try{

            Company.sync({ force: false }).then((result) => {
            console.log("Result of sync", result);
            Company.findAll({ }).then(company => {
                console.log("All company:", JSON.stringify(company, null, 4));
                
                if(!company.length){
                    return res.json({
                        status: 404,                        
                        message: "company not found."
                    })    
                }
                return res.render('Company/company', {
                    status: 200,
                    data: company,
                    message: "company fetched successfully."
                })
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
    const company_name = req.body.company_name;
    console.log(company_name);
    console.log(Company);
    //database code to insert dataconsole.log("Attempting to add company.");
    Company.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
        Company.create(
            req.body,
        ).then(company_name => {
            console.log("New Company's auto-generated ID:", company_name.company_id);
        
            res.redirect('/company');
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

