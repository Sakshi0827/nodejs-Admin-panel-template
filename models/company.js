const Sequelize = require('sequelize');

const connection = require('../config/configdb');
const sequelize = connection.connection;

// console.log("Sequelize object", sequelize);

const Model = Sequelize.Model;


class Company extends Model {};
Company.init({
        // attributes
        company_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        company_name: {
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
        modelName: 'company_master'
        // options
    });

module.exports = Company;
