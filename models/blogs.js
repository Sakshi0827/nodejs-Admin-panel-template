// const Sequelize = require('sequelize');
// const Blogs_category = require('./blogs_category');
// // const User = require('./user');

// const connection = require('../config/configdb');
// const sequelize = connection.connection;

// const Model = Sequelize.Model;


// class Blogs extends Model {};

// Blogs.init({
//         // attributes
//         blogs_id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         user_id: {
//             type: Sequelize.INTEGER,
//             allowNull: false
//         },
//         blogs_title: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         blogs_description: {
//             type: Sequelize.TEXT,
//             allowNull: false
//         },
//         blogs_post_date: {
//             type: Sequelize.DATEONLY,
//             allowNull: false
//         },
//         blogs_category_id: {
//             type: Sequelize.INTEGER,
//             allowNull: false
//         },
//         blogs_image: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         created_date: {
//             type: Sequelize.DATE,
//             allowNull: false,
//             defaultValue: new Date()
//         },
//         updated_date: {
//             type: Sequelize.DATE,
//             allowNull: false,
//             defaultValue: new Date()
//         }},
//     {
//         sequelize,
//         modelName: 'blogs'
//         // options
//     });

// Blogs_category.hasMany(Blogs, {foreignKey: 'blogs_category_id'});
// // User.hasMany(Blogs, {foreignKey: 'user_id'});

// module.exports = Blogs ;
