const express = require("express");
const { validate, Book } = require("../models/book");
const route = express.Router();

route.get("/", async (req, res) => {
  const book = await Book.find();
  res.send(book);
});
route.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const { title, description, filter, towardsYear, filePath } = req.body;
    const book = new Book({
      title: title,
      description: description,
      filter: filter,
      towardsYear: towardsYear,
      filePath: filePath,
    });
    await book.save();
    res.send(book);
  } catch (e) {
    console.log(JSON.parse(JSON.stringify(e)));
  }
});

module.exports = route;
