const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Event_category", {
    event_category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    event_category_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
