// 7. Copy and paste code from User.js into your file (This doesn't need typing out as it was covered last week)
const { db, DataTypes, Model } = require("../../db/connection.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
