const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const auth = require("../middlewares/auth");

route.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user);
});

route.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  try {
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User Already Exists.");
    user = new User({
      fullName: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();

    const token = jwt.sign({ _id: user._id }, "resource");

    res
      .header("x-token", token)
      .send(_.pick(user, ["_id", "fullName", "email"]));
  } catch (e) {
    console.log(e);
  }
});

module.exports = route;
