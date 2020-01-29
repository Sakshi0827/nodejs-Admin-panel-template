const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define('Country', {
    country_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    country_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

