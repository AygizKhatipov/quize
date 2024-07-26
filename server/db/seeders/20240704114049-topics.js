"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Russian language",

          img: "",
        },
        {
          title: "Capitals",

          img: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Topics', null, {});
     
  },
};
