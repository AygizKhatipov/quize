"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Единственное односложное прилагательное",
          answer: "Злой",
          topicId: 1,
          img: "",
        },
        {
          question: "Приставка позволящая создать грамматически верное бесконечное слово",
          answer: "Пра",
          topicId: 1,
          img: "",
        },

        {
          question: "Столиица Австралии",
          answer: "Канберра",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Бразилии",
          answer: "Бразилиа",
          topicId: 2,
          img: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
