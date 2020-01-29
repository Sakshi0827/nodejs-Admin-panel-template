// const Sequelize = require('sequelize');

// const connection = require('../config/configdb');
// const sequelize = connection.connection;
const State = require('./state');

// const Model = Sequelize.Model;


'use strict';
module.exports = (sequelize, DataTypes) => {
  var Country = sequelize.define('Country', {
    country_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    country_name: {
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

  Country.associate = function(models) {
    models.Country.hasMany(models.State);
    models.State.belongsTo(models.Country);
  };

  return Country;
};



// class Country extends Model {}
// Country.init({
//         // attributes
//         country_id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         country_name: {
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
//         modelName: 'country_master'
//         // options
//     });
//     Country.hasMany(State, {
//         foreignKey: 'country_id'
//     });
//     State.belongsTo(Country, {
//         foreignKey: 'country_id'
//     });
    
// console.log('THe country model is',Country);
// module.exports = Country;

