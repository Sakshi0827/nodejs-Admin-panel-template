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
        allowNull: false,
        references: {
          model: 'blogs',
          key: 'blogs_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      blogs_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'blogs_categories',
          key: 'blogs_category_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("blogs_category_intermediates");
  }
};
