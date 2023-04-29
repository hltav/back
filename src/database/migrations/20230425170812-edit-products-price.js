'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'price', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('products', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
