"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Russian language",

          img: "https://maxluki.ru/wp-content/uploads/2023/02/1589698358_4.jpg",
        },
        {
          title: "Capitals",

          img: "https://avatars.mds.yandex.net/get-games/1892995/2a0000017c18da6cadb3c9549ebba94a5dc1/orig",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Topics', null, {});
     
  },
};
