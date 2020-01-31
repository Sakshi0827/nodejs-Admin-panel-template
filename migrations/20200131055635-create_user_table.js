'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      first_name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      last_name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      username: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      dob: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      fitness_group_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      gender: {
          type: Sequelize.ENUM("M", "F"),
          allowNull: false
      },
      mobile: {
          type: Sequelize.INTEGER(10),
          allowNull: false
      },
      city_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      state_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      country_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      pincode: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      company_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      user_role_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
