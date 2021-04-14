'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Subbreaddits", [{
     name: "banana Bread",
     sidebar: "This is a sub for banana bread",
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     name: "sour dough",
     sidebar: "get your sour dough bread here!",
    createdAt: new Date(),
    updatedAt: new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Subbreaddits', null, {});
  }
};
