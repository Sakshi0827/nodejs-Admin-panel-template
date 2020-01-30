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
