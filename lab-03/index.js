const express = require("express");
const app = express();
const appPort = 8080;

app.get("/", (req, res) => {
  res.send("Full capacity during deployments!. Server is up on: " + appPort);
});
app.listen(appPort, () => {
  console.log("Server is up on: " + appPort);
});
