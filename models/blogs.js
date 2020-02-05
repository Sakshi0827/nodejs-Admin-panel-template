const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Blogs", {
    blogs_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
    },
    user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
    },
    blogs_title: {
            type: Sequelize.STRING,
            allowNull: false
    },
    blogs_description: {
            type: Sequelize.TEXT,
            allowNull: false
    },
    blogs_post_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
    },
    blogs_image: {
            type: Sequelize.STRING,
            allowNull: false
    }
});
