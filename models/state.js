const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define('State', {
    state_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    country_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    state_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});