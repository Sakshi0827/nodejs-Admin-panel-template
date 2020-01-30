const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define('City', {
    city_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    state_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    city_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
