'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('profiles',{
     id : {
       allowNull : false,
       primaryKey : true,
       type: Sequelize.UUID,
       defaultValue: Sequelize.literal('uuid_generate_v4()')
     },
     name : {
       allowNull : false,
       type : Sequelize.STRING,
     },
     description : {
       allowNull : false,
       type : Sequelize.STRING
     }
   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('profiles');
  }
};
