const Sequelize = require('sequelize');

const connection = require('../config/configdb');
const sequelize = connection.connection;

// console.log("Sequelize object", sequelize);

const Model = Sequelize.Model;


class Blogs_category extends Model {};
Blogs_category.init({
        // attributes
        blogs_category_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        blogs_category_name: {
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
        modelName: 'blogs_category_master'
        // options
    });

module.exports = { Blogs_category };
