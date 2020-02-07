const Company  = require('../models/company');


// company list get
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

//add company get
exports.add_company = function (req, res, next) {
    res.locals = {  title: 'Add Company' };
    res.render('Company/add_company');
};

// add company post
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

//delete company
exports.delete_company = function (req, res){
    console.log(`Attempting to destroy a company with company_id ${req.params.company_id}`);
    Company.destroy({
        where: {
            company_id: req.params.company_id
        }
    }).then((result) => {
        if(result){
            console.log("The Company was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "Company delete successful."
            })
        } else {
            console.log("Company delete failed.", result)
            return res.json({
                status: 404,
                data: result,
                message: "Company delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Company deletion failed."
        })
    });
};

//edit company get
exports.edit_company = function(req, res) {
    res.locals = {  title: 'Edit Company' };
    console.log(req.params);
    try{
        Company.findAll({ where: {company_id: req.params.company_id } }).then(company => {
            console.log("company with company id: ",req.params.company_id, " is", JSON.stringify(company, null, 4));
            return res.render('Company/edit_company', {
                status: 200,
                data: company,
                message: "company fetched successfully."
            })
        }).catch(err => {
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

//edit company put
exports.edit_company_put = function(req, res) {
    res.locals = {title: 'Edit Company'};
    console.log("------------",req.params, req.body);
    Company.findOne({ where: { company_id: req.params.company_id }})
        .then((result) => {
            if(result){
                result.update({
                    company_name:req.body.company_name
                });
                console.log("The Company was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "Company edit successful."
                })
            } else {
                console.log("Company edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "Company edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Company edit failed."
        })
    });
};
