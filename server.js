// 8. Import db from connection.js
const { db } = require("./db/connection.js");
const app = require("./src/app.js");
const port = 3000;

// 9. Update app.listen callback to be async and call await db.sync() in the callback
app.listen(port, async () => {
  await db.sync();
  console.log(`Listening on port: ${port}`);
});
