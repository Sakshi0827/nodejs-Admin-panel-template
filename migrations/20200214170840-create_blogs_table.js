'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("blogs", {
      blogs_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE'
      },
      blogs_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      blogs_description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      blogs_post_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      blogs_image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("blogs");
  }
};
