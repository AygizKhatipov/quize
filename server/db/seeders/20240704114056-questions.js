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
          img: " https://storage.yandexcloud.net/printio/assets/realistic_views/sweatshirt/large/a9a7e5d023cb26bf0982db1617581897907b92f4.jpg?1567056014",
        },
        {
          question: "Множественное число слова `брелок` ",
          answer: "Брелоки",
          topicId: 1,
          img: "https://ae04.alicdn.com/kf/S27131e6b78bc40afb03e0be8b1adbaf0S.jpg",
        },
        {
          question: "Единственное слово без корня в русском языке",
          answer: "Вынуть",
          topicId: 1,
          img: "http://s1.fotokto.ru/photo/full/70/700363.jpg",
        },

        {
          question: "Приставка позволящая создать грамматически верное бесконечное слово",
          answer: "Пра",
          topicId: 1,
          img: "https://img-s3.onedio.com/id-5864f436646da41b0fb32686/rev-0/w-635/f-jpg-webp/s-5f81ba61c591c96aee88acea91019b680bb437da.webp",
        },
        {
          question: "Слово где 7 гласных и все `О`",
          answer: "Обороноспособность",
          topicId: 1,
          img: " https://hi-news.ru/wp-content/uploads/2022/03/Jadernaja_triada-750x422.jpg",
        },
        {
          question: "Столица Люксембурга",
          answer: "Люксембург",
          topicId: 2,
          img: " https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1280px-Flag_of_Luxembourg.svg.png",
        },

        {
          question: "Столица Алжира",
          answer: "Алжир",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
        },
        {
          question: "Столица Сингапура",
          answer: "Сингапур",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
        },
        {
          question: "Столица Ватикана",
          answer: "Ватикан",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg",
        },
        {
          question: "Столица Монако",
          answer: "Монако",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
        },
        {
          question: "Столица Сан-Марино",
          answer: "Сан-Марино",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
        },
        {
          question: "Стоица Гватемалы",
          answer: "Гватемала",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/800px-Flag_of_Guatemala.svg.png",
        },
        {
          question: "Столица Джибути",
          answer: "Джибути",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
        },
        {
          question: "Столица Панамы",
          answer: "Панама",
          topicId: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/2560px-Flag_of_Panama.svg.png",
        },
        {
          question: "Столица Туниса",
          answer: "Тунис",
          topicId: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrhSmCcV7-XhQJcJ7Fr7-IzM0DD4dzGbu_w&s",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
