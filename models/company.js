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
<<<<<<< HEAD
            defaultValue: new Date()
=======
            defaultValue:new Date()
>>>>>>> 4919bf6f83711aef1c22a6ef0e4aebdb0533f374
        },
        updated_date: {
            type: Sequelize.DATE,
            allowNull: false,
<<<<<<< HEAD
            defaultValue: new Date()
=======
            defaultValue:new Date()

>>>>>>> 4919bf6f83711aef1c22a6ef0e4aebdb0533f374
        }},
    {
        sequelize,
        modelName: 'company_master'
        // options
    });

<<<<<<< HEAD
module.exports = Company ;
=======
module.exports = Company;
>>>>>>> 4919bf6f83711aef1c22a6ef0e4aebdb0533f374
