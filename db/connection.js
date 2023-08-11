// 6. Copy and paste code from connection.js into your file (This doesn't need typing out as it was covered last week)
const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "./db.sqlite"),
});

module.exports = {
  db,
  DataTypes,
  Model,
};
