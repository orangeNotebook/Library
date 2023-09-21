const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

const BookModel = require("./models/Book");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true });

//default path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//no search term provided, return all countries
app.post("/addItem", async (req, res) => {
  const volume = req.body.volume;

  console.log("adding " + volume.title);

  const book = new BookModel({
    volumeInfo: volume,
  });

  try {
    await book.save();
    res.send("book saved");
  } catch (err) {
    console.log(err);
  }
});

app.delete("/removeItem/:id", async (req, res) => {
  const id = req.params.id;

  await BookModel.findByIdAndRemove(id).exec();
  res.send("Deleted");
});

app.get("/getAllItems", async (req, res) => {
  BookModel.find({})
    .then((foundItems) => {
      res.send(foundItems);
    })
    .catch((err) => {
      console.log(err);
    });
});

//search term provided, returns only countries that match the search term
app.get("/getCountries/:searchTerm", (req, res) => {
  let searchTerm = req.params.searchTerm;

  function checkCountry(country) {
    return country.includes(searchTerm);
  }

  res.send(countries.filter(checkCountry));
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
