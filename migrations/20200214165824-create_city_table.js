'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("cities", {
      city_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'state_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      city_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cities");
  }
};
