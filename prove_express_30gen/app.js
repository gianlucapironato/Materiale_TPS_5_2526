const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

// La prima volta, ricordati di lanciare 'npm install' prima di eseguire il codice