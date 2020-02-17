const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Sliders", {
        slider_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
        },
        slider_title: {
                type: Sequelize.STRING,
                allowNull: false
        },
        slider_image: {
                type: Sequelize.STRING,
                allowNull: false
        }
});