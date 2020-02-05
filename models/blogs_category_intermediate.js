const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Blogs_category_intermediate", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    blogs_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    blogs_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});






