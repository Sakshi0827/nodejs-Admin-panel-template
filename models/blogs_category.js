const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Blogs_category", {
    blogs_category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    blogs_category_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});