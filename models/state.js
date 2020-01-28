const Sequelize = require('sequelize');
const Country = require('./country');
const connection = require('../config/configdb');
const sequelize = connection.connection;



const Model = Sequelize.Model;

class State extends Model {}
State.init({
        // attributes
        state_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        country_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
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

Country.hasMany(State, {
    foreignKey: 'country_id'
});
State.belongsTo(Country, {
    foreignKey: 'country_id'
});


module.exports = State;
