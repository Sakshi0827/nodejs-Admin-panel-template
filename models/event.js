const Sequelize = require('sequelize');
const Event_category = require('./event_category');
const connection = require('../config/configdb');
const sequelize = connection.connection;


const Model = Sequelize.Model;


class Event extends Model {};
Event.init({
        // attributes
        
        event_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        event_title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        event_description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        event_location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        event_category_id: {
            type: Sequelize.INTEGER,
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
        modelName: 'event'
    });


Event_category.hasMany(Event, {foreignKey: 'event_category_id'});


module.exports = Event;
