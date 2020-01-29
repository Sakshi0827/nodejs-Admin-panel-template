// const Sequelize = require('sequelize');
const Country = require('./country');
// const connection = require('../config/configdb');
// const sequelize = connection.connection;

// const Model = Sequelize.Model;


'use strict';
module.exports = (sequelize, DataTypes) => {
  var State = sequelize.define('State', {
    state_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    state_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:new Date()
    },
    updated_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:new Date()
    }
  },
  );

  State.associate = function(models) {
    models.Country.hasMany(models.State);
    models.State.belongsTo(models.Country);
  };

  return State;
};

// class State extends Model {}
// State.init({
//         // attributes
//         state_id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         country_id: {
//             type: Sequelize.INTEGER,
//             allowNull: false
//         },
//         state_name: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         created_date: {
//             type: Sequelize.DATE,
//             allowNull: false,
//             defaultValue:new Date()
//         },
//         updated_date: {
//             type: Sequelize.DATE,
//             allowNull: false,
//             defaultValue:new Date()
//         }},
//     {
//         sequelize,
//         modelName: 'state'
//         // options
//     });
// console.log("Country",sequelize.models);
// Country.hasMany(State, {
//     foreignKey: 'country_id'
// });
// state.belongsTo(Country, {
//     foreignKey: 'country_id'
// });


// module.exports = State;
