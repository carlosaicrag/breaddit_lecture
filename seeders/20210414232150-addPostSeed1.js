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
   return queryInterface.bulkInsert("Posts", [{
     userId: 1,
     subId: 2,
     title: "I feel pretty strongly about sourdough",
     body: "after a lot of thought I really like sourdough more than the banana bread",
     imageUrl: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-970-80.jpg.webp",
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     userId: 1,
     subId: 1,
     title: "My time with banana bread",
     body: "It's time for me to come and say that banana bread and I are splitting up...",
     imageUrl: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-970-80.jpg.webp",
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
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
