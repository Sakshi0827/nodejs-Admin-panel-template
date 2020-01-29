// // const Sequelize = require('sequelize');
// // const State = require('./state');
// // const connection = require('../config/configdb');
// // const sequelize = connection.connection;
// // const Model = Sequelize.Model;


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var City = sequelize.define('City', {
//     city_id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         state_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         city_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         created_date: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue:new Date()
//         },
//         updated_date: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue:new Date()
//         }
//   },
//   );

//   City.associate = function(models) {
//     models.State.hasMany(models.City);
//     models.City.belongsTo(models.State);
//   };

//   return City;
// };


// // class City extends Model {}
// // City.init({
// //         // attributes
// //         city_id: {
// //             type: Sequelize.INTEGER,
// //             primaryKey: true,
// //             autoIncrement: true,
// //             allowNull: false
// //         },
// //         state_id: {
// //             type: Sequelize.INTEGER,
// //             allowNull: false
// //         },
// //         city_name: {
// //             type: Sequelize.STRING,
// //             allowNull: false
// //         },
// //         created_date: {
// //             type: Sequelize.DATE,
// //             allowNull: false,
// //             defaultValue:new Date()
// //         },
// //         updated_date: {
// //             type: Sequelize.DATE,
// //             allowNull: false,
// //             defaultValue:new Date()
// //         }},
// //     {
// //         sequelize,
// //         modelName: 'city'
// //         // options
// //     });


// // State.hasOne(City, {
// //     foreignKey: 'state_id'
// // });

// // module.exports = City;
