const Sequelize = require('sequelize');

const connection = require('../config/configdb');
const sequelize = connection.connection;

const Model = Sequelize.Model;


class Country extends Model {}
Country.init({
        // attributes
        country_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        country_name: {
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
        modelName: 'country_master'
        // options
    });


class State extends Model {}
State.init({
        // attributes
        state_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // country_id: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false
        // },
        state_name: {
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
        modelName: 'state'
        // options
    });

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

module.exports = Country;

