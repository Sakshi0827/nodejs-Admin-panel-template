'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pages", {
        page_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        page_title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        page_content: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        page_image: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pages");
  }
};
