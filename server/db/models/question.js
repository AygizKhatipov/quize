"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topics }) {
      this.belongsTo(Topics, { foreignKey: "topicId" });
    }
  }
  Questions.init(
    {
      question: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
      topicId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Questions",
    }
  );
  return Questions;
};
