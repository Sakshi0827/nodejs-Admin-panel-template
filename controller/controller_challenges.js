const connection = require('../config/configdb');
const sequelize = connection.connection;

const Challenges  = require('../models/challenges');



exports.challenges_list = function (req, res) {
    res.locals = {  title: 'Challenges' };
    res.render('Challenges/challenges');
};
exports.add_challenges = function (req, res) {
    res.locals = {  title: 'Add Challenges' };
    res.render('Challenges/add_challenges');
};
exports.add_challenges_post = function (req, res) {
    const challenge_tilte = req.body.challenge_tilte;
    const challenge_price = req.body.challenge_price;
    const challenge_description = req.body.challenge_description;
    const challenge_note = req.body.challenge_note;
    console.log(req.body);




//database code to insert dataconsole.log("Attempting to add company.");
    Challenges.sync({ force: false }).then((result) => {
        console.log("Result of sync", result);
        Challenges.create(
            req.body
        ).then(challenge_title => {
            console.log("New challenge's auto-generated ID:", challenge_title.challenge_id);
            return res.json({
                status: 200,
                data: challenge_title,challenge_price,
                message: "challenge created successfully."
            })
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({
                status: 500,
                data: err,
                message: "Challenges creation failed."
            })
        });
    }).catch((error) => {
        console.log("An error was encountered during the synchronization", error);
    })




    // res.redirect('/challenges');
};
