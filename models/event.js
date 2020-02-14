const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Event", {
    event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    event_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event_description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    event_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    event_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
