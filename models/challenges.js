const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Challenge", {
    challenge_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    challenge_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    challenge_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    challenge_description: {
    type: Sequelize.STRING,
        allowNull: false
    },
    challenge_note: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
