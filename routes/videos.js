const express = require("express");
const route = express.Router();
const auth = require("../middlewares/auth");
const { Video, validate } = require("../models/video");

route.get("/", auth, async (req, res) => {
  const videos = await Video.find();
  res.send(videos);
});

/* route.post("/",auth, async(req,res) =>{
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    try{
        const video = new Video({
            
        })
    }
}) */
