const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("User_role", {
    user_role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_role_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});
