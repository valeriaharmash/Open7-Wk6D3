const express = require("express");
const app = express();
// 10. Import User model
const User = require("./models/User.js");

// 11. Remove endpoints from previous session and use express.json()
app.use(express.json());

// 12. All following endpoints will use next(error) handling. Add a post request that creates a new user using req.body and returns the username and demonstrate
app.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      throw new Error("No user created");
    }
    res.send(user.username);
  } catch (error) {
    next(error);
  }
});

// 13. Add a get request that returns all users and demonstrate
app.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({});
    if (!users) {
      throw new Error("No users found");
    }
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// 14. Add a get request that returns a found user using req.params.username to search the db and demonstrate
app.get("/:username", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    if (!user) {
      throw new Error("No user found");
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// 15. Add a put request that uses req.params.username to find a user, and req.body to update the user. Returning only a status code and demonstrate
app.put("/:username", async (req, res, next) => {
  try {
    const updated = await User.update(req.body, {
      where: { username: req.params.username },
    });
    console.log(updated);
    if (updated[0] === 0) {
      throw new Error("No update made");
    }
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// 16. Add a delete request that uses req.params.username to find a user and delete them. Returning only a status code and demonstrate
app.delete("/:username", async (req, res, next) => {
  try {
    const deleted = await User.destroy({
      where: { username: req.params.username },
    });
    if (deleted === 0) {
      throw new Error("No user deleted");
    }
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
