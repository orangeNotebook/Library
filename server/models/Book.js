const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  volumeInfo: {
    type: Object,
    required: true,
  },
  state: {
    type: Array,
    required: false,
  },
  review: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
