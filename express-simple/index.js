const express = require("express");
let app = express();
app.use(express.json());
let persons = ["Usman", "Noman"];
app.get("/api/persons", async (req, res) => {
  return res.send(persons);
});
app.post("/api/persons", async (req, res) => {
  persons.push(req.body.name);
  return res.send(persons);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello A Section</h1>");
});
app.listen("4500", function () {
  console.log("Listeninig on port 4500");
});
