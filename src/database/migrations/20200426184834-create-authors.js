'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('authors', {
        
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors');
  }
};
