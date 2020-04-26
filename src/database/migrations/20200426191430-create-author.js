'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('authors', {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      media_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'media', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors');
  }
};
