const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Server is up on : " + process.env.PORT);
});
app.listen(process.env.PORT, () => {
  console.log("Server is up on: " + process.env.PORT);
});
