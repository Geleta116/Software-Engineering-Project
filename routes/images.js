const express = require("express");
const route = express.Router();
const multer = require("multer");
const { Image } = require("../models/image");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("testImage");

route.post("/", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) console.log(err);
    else {
      const newImage = new Image({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });
      await newImage.save();
      res.send("Done");
    }
  });
});
route.get("/", (req, res) => {
  res.send("Uploaded");
});

module.exports = route;
