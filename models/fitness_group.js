const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Fitness_group", {
    fitness_group_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fitness_group_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
