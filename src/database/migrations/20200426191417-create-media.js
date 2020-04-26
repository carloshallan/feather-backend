'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('media', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors');
  }
};
