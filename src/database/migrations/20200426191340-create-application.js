'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('application', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application');
  }
};
