const server = require("./src/app.js");
// const { conn } = require("./src/db.js");

// Syncing all the models at once.

server.listen(process.env.PORT || 3001, () => {
  console.log("Listening at port " + process.env.PORT || 3001); // eslint-disable-line no-console
});
