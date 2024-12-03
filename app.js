const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(name= "Sarah AlRashidi");
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
