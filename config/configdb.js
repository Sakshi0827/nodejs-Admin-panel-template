var Sequelize = require('sequelize');

// Option 1: Passing parameters separately
var sequelize = new Sequelize('roadrunners', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql',
    define:{
        freezeTableName: true,
        timestamps: false
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports= {connection:sequelize};
