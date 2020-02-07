const Challenges  = require('../models/challenges');

exports.challenges_list = function (req, res) {
    res.locals = {  title: 'Challenges' };
    try{
        Challenges.findAll({ }).then(challenges => {
            console.log("All Challenges:", JSON.stringify(challenges, null, 4));
            return res.render('Challenges/challenges', {
                status: 200,
                data: challenges,
                message: "Challenges fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Challenges fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

exports.add_challenges = function (req, res) {
    res.locals = {  title: 'Add Challenges' };
    res.render('Challenges/add_challenges');
};

exports.add_challenges_post = function (req, res) {
    Challenges.create(
            req.body
        ).then(challenge_title => {
            console.log("New challenge's auto-generated ID:", challenge_title.challenge_id);
            res.redirect('/challenges');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Challenges creation failed."
            })
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })
};

//delete challenge
exports.delete_challenges = function (req, res){
    console.log(`Attempting to destroy a company with company_id ${req.params.challenge_id}`);
    Challenges.destroy({
        where: {
            challenge_id: req.params.challenge_id
        }
    }).then((result) => {
        if(result){
            console.log("The challenge was deleted.", result);
            return res.json({
                status: 200,
                data: result,
                message: "challenge delete successful."
            })
        } else {
            console.log("challenge delete failed.", result)
            return res.json({
                status: 404,
                data: result,
                message: "challenge delete failed, no record found to delete."
            })
        }
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "challenge deletion failed."
        })
    });
};

exports.edit_challenges = function (req, res) {
    res.locals = {  title: 'Edit Challenges' };
    try{
        Challenges.findAll({ where:{challenge_id: req.params.challenge_id }}).then(challenges => {
            console.log("Fetched Challenges:", JSON.stringify(challenges, null, 4));
            return res.render('Challenges/edit_challenges', {
                status: 200,
                data: challenges,
                message: "Challenges fetched successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Challenges fetching failed."
            })
        });
    } catch (exception){
        console.log("An exception occured, please contact the administrator.", exception);
    }
};

//edit challenges put
exports.edit_challenges_put = function(req, res) {
    res.locals = {title: 'Edit Challenges'};
    console.log("------------",req.params, req.body);
    Challenges.findOne({ where: { challenge_id: req.params.challenge_id }})
        .then((result) => {
            if(result){
                result.update({
                    challenge_title:req.body.challenge_title,
                    challenge_price:req.body.challenge_price,
                    challenge_description:req.body.challenge_description,
                    challenge_note:req.body.challenge_note,
                });
                console.log("The Challenges was edited.", result);
                return res.json({
                    status: 200,
                    data: result,
                    message: "Challenges edit successful."
                })
            } else {
                console.log("Challenges edit failed.", result);
                return res.json({
                    status: 404,
                    data: result,
                    message: "Challenges edit failed, no record found to edit."
                })
            }
        }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({
            status: 500,
            data: err,
            message: "Challenges edit failed."
        })
    });
};

