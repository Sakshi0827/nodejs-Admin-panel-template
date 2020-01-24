const Sequelize = require('sequelize');
const State = require('./state');
const connection = require('../config/configdb');
const sequelize = connection.connection;
const Model = Sequelize.Model;


class City extends Model {}
City.init({
        // attributes
        city_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        state_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        city_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue:new Date()
        },
        updated_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue:new Date()
        }},
    {
        sequelize,
        modelName: 'city'
        // options
    });


State.hasOne(City, {
    foreignKey: 'state_id',
    allowNull: false
});

module.exports = City;
