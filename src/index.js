const express = require("express");

const app = express();

app.use(express.json());

app.post("/issue", (req, res, next) => {
  console.log(JSON.stringify(req.body));
});

app.listen(80, () => {
  console.log("Listening on 80...");
});
