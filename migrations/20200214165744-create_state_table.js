'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("states", {
      state_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'country_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      state_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("states");

  }
};
