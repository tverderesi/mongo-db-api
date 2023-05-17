// Create a schema for the books collection
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  pages: { type: Number },
  edition: { type: Number },
  isbn: { type: String },
  price: { type: Number },
  type: {
    type: String,
    enum: ["Hardcover", "Paperback", "Ebook", "Audiobook", "Other"],
  },
});

// Create a model for the books collection
const Book = mongoose.model("Book", BookSchema);

// export the model
export default Book;
