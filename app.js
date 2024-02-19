require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json());

const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(
  process.env.PORT,
  console.log(`server is running at port ${process.env.PORT}`)
);
