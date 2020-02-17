'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("sliders", {
      slider_id: {
        type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
      },
      slider_title: {
        type: Sequelize.STRING,
            allowNull: false
      },
      slider_image: {
        type: Sequelize.STRING,
            allowNull: false
      },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("sliders");
  }
};
