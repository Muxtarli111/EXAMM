const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use = express.json();
app.use = cors();

mongoose.connect(
  "mongodb+srv://fatimaimbp109:fatima777@cluster0.3aeoa.mongodb.net/"
);

const WomenSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: Number,
});

const WomenModel = mongoose.model("/shops", WomenSchema);

app.get("/shop/:id", async (req, res) => {
  let id = req.params.id;
  let newCategories = await WomenModel.findById(id);

  res.send("Hello World!");
});

app.get("/shop", async (req, res) => {
  let newCategories = await WomenModel.findById(id);
  res.send("Hello World!");
});

app.post("/shop", async (req, res) => {
    
  res.send("Got a POST request");
});

app.put("/shop/:id", async (req, res) => {
  let id = req.params.id;
  res.send("Got a PUT request at /user");
});

app.delete("/shop/:id", async (req, res) => {
  let id = req.params.id;
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
