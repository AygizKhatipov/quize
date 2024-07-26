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
          question: "Множественное число слова `брелок` ",
          answer: "Брелоки",
          topicId: 1,
          img: "",
        },
        {
          question: "Единственное слово без корня в русском языке",
          answer: "Вынуть",
          topicId: 1,
          img: "",
        },

        {
          question:
            "Приставка позволящая создать грамматически верное бесконечное слово",
          answer: "Пра",
          topicId: 1,
          img: "",
        },
        {
          question: "Слово где 7 гласных и все `О`",
          answer: "Обороноспособность",
          topicId: 1,
          img: "",
        },
        {
          question: "Столица Люксембурга",
          answer: "Люксембург",
          topicId: 2,
          img: "",
        },

        {
          question: "Алжир",
          answer: "Алжир",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Сингапура",
          answer: "Сингапур",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Ватикана",
          answer: "Ватикан",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Монако",
          answer: "Монако",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Сан-Марино",
          answer: "Сан-Марино",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Гватемалы",
          answer: "Гватемала",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Джибути",
          answer: "Джибути",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Панамы",
          answer: "Панама",
          topicId: 2,
          img: "",
        },
        {
          question: "Столиица Туниса",
          answer: "Тунис",
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
