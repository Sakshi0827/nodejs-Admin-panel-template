const Sequelize = require('sequelize');

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
            primaryKey: true,
            // references: 'event_category_master', // <<< Note, its table's name, not object name
            // referencesKey: 'event_category_id', // <<< Note, its a column name
            references: {
                model: 'event_category_master', // 'event_category_master' refers to table name
                key: 'event_category_id' // 'event_category_id' refers to column name in persons table
             },
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
    // console.log(event_category_id);
Event.hasMany(Event_category);
module.exports = Event;
