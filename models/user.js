const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

function validate(user) {
  const schema = {
    fullname: Joi.string().min(2).required(true),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().min(8),
  };
  return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validate;
