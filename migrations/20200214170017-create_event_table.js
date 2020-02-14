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
      event_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cities',
          key: 'city_id'
        }
      },
      event_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'event_categories',
          key: 'event_category_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("events");
  }
};
