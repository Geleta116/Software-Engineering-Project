const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const bookRoute = require("./routes/books");
const userRoute = require("./routes/users");
const loginRoute = require("./routes/login");
const uploadRoute = require("./routes/images");

mongoose
  .connect("mongodb://localhost/resource-managment")
  .then(console.log("Connection to mongoDB is succesful."));

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/resource-management/books", bookRoute);
app.use("/resource-management/users", userRoute);
app.use("/resource-management/login", loginRoute);
app.use("/resource-management/uploads", uploadRoute);

app.listen(3005, () => {
  console.log("Listening on Port 3005");
});
