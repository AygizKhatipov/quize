"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topics extends Model {
    static associate({ Questions }) {
      this.hasMany(Questions, { foreignKey: "topicId" });
    }
  }
  Topics.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Topics",
    }
  );
  return Topics;
};