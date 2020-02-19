const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("User", {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    fitness_group_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM("M", "F"),
        allowNull: false
    },
    mobile: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    country_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    state_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pincode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
