'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("blogs_category_intermediates", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      blogs_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      blogs_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("blogs_category_intermediates");
  }
};
