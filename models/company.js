const Sequelize = require('sequelize');

const connection = require('../config/configdb');
const sequelize = connection.connection;

// console.log("Sequelize object", sequelize);

const Model = Sequelize.Model;


class Company extends Model {};
Company.init({
        // attributes
        companyid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        companyname: {
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
        modelName: 'company_master'
        // options
    });

module.exports = { BusinessType }
