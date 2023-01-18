const mongoose = require("mongoose");
const Joi = require("joi");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true, minlength: 1 },
  description: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: true,
  },
  towardsYear: {
    type: Number,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

function validateBook(book) {
  const schema = {
    title: Joi.string().min(1).required(),
    description: Joi.string().required(),
    filter: Joi.string().required(),
    towardsYear: Joi.number().required(),
    filePath: Joi.string().required(),
  };
  return Joi.validate(book, schema);
}

module.exports.Book = Book;
module.exports.validate = validateBook;
