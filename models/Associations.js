module.exports = async() => {
    const Country = require('./Country');
    const State = require('./State'); 

    Country.hasMany(State, { foreignKey: "country_id"});
    State.belongsTo(Country, { foreignKey: "country_id"});

console.log("association running");

const toy = await State.findAll({  
    include: [
    {
        model: Country
    }
    ]}).catch(err => {
        console.error('Unable to connect to the database:', err);
    });


console.log("states: ", toy[0].state_name, toy[0].Country.country_name);
};