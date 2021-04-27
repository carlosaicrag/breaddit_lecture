'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('tableName', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const hashedPW = await bcrypt.hash("password", 10);
    return queryInterface.bulkInsert('Users', [
      {
        username: 'carlos',
        email: 'carlos@gmail.com',
        age: 10000,
        hashedPassword: hashedPW,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
