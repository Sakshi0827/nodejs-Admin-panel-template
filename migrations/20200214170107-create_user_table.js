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
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
        allowNull: false,
        references: {
          model: 'fitness_groups',
          key: 'fitness_group_id'
        },
        onUpdate: 'CASCADE'
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
        allowNull: false,
        references: {
          model: 'cities',
          key: 'city_id'
        },
        onUpdate: 'CASCADE'
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'state_id'
        },
        onUpdate: 'CASCADE'
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'country_id'
        },
        onUpdate: 'CASCADE'
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'company_id'
        },
        onUpdate: 'CASCADE'
      },
      user_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user_roles',
          key: 'user_role_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
