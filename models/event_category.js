const Sequelize = require('sequelize');

const connection = require('../config/configdb');
const sequelize = connection.connection;

// console.log("Sequelize object", sequelize);

const Model = Sequelize.Model;


class Event_category extends Model {};
Event_category.init({
        // attributes
        event_category_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        event_category_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_date: {
            type: Sequelize.DATE,
            allowNull: false
        }},
    {
        sequelize,
        modelName: 'event_category_master'
        // options
    });

module.exports = { Event_category };
