// const Sequelize = require('sequelize');

// const connection = require('../config/configdb');
// const sequelize = connection.connection;

// // console.log("Sequelize object", sequelize);

// const Model = Sequelize.Model;


// class Challenges extends Model {};


// Challenges.init({
//         // attributes
//         challenge_id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         challenge_title: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         challenge_price: {
//             type: Sequelize.INTEGER,
//             allowNull: false
//         },
//         challenge_description: {
//         type: Sequelize.STRING,
//             allowNull: false
//         },
//         challenge_note: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         created_date: {
//             type: Sequelize.DATE,
//             allowNull: false,
//             defaultValue:new Date()
//         },
//         updated_date: {
//             type: Sequelize.DATE,
//             allowNull: false,
//             defaultValue:new Date()
//         }},
//     {
//         sequelize,
//         modelName: 'challenge_master'
//         // options
//     });

// module.exports = Challenges ;
