const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Page", {
    page_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
    },
    user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
    },
    page_title: {
            type: Sequelize.STRING,
            allowNull: false
    },
    page_content: {
            type: Sequelize.TEXT,
            allowNull: false
    },
    page_image: {
            type: Sequelize.STRING,
            allowNull: false
    }
});
