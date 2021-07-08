const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.table(req.query);
  const greeting = req.query.message || "World";
  res.send(`<h1>Hello ${greeting}</h1>`);
});

app.post("/", (req, res) => {
  console.table(req.body);
  res.send({ message: req.body });
});

app.listen(port, () => {
  console.warn(`Server is listening on http://localhost:${port}`);
});

module.exports = app
