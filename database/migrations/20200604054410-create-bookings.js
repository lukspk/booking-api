'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('bookings', {
    id : {
      allowNull : false,
      primaryKey : true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    date_start : {
      allowNull : false,
      type : Sequelize.DATE
    },
    data_finish : {
      allowNull : false,
      type : Sequelize.DATE
    },
    status_id : {
      allowNull : false,
      type : Sequelize.UUID,
      references : { model : 'Status', key : 'id'}
    },
  });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
