const Sequelize = require("sequelize");

const sequelize = new Sequelize("roadrunners", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})


global.sequelize = sequelize;
module.exports = sequelize;

//sequelize migration: create --name create_users_table
//sequelize db:migrate
//sequelize db:migrate:undo         last migration undo
//sequelize db:migrate:undo:all


// plural kr dena model ko in migration :)