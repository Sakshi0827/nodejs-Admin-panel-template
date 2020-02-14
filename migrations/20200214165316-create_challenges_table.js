'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("challenges", {
      challenge_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      challenge_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      challenge_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      challenge_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      challenge_note: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("challenges");
  }
};
