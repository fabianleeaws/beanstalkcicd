const express = require("express");
const app = express();
const appPort = 8080;

app.get("/", (req, res) => {
  res.send("Hello world from a Node.js app!");
});
app.listen(appPort, () => {
  console.log("Server is up on: " + appPort);
});
