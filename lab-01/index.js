const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from a Node.js app!");
});
app.listen(process.env.PORT, () => {
  console.log("Server is up on: " + process.env.PORT);
});
