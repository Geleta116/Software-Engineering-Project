const mongoose = require("mongoose");
const Joi = require("joi");

const videoSchema = mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
});

const Video = mongoose.model("Video", videoSchema);

function validate(video) {
  const schema = {
    title: Joi.string().required().label("Video Title"),
    link: Joi.string().required().label("Video Link"),
    description: Joi.string().required().label("Video Description"),
  };
  return Joi.validate(video, schema);
}

module.exports.Video = Video;
module.exports.validate = validate;
