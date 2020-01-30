'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("events", {
      event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      event_title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      event_description: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      event_location: {
          type: Sequelize.STRING,
          allowNull: false
      },
      event_category_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("events");

  }
};
