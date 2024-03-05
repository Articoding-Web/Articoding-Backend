"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const levelRouter = require("./routes/levelRouter");
const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");
const { errorHandler } = require("./error-handler/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/level", levelRouter);
app.use("/api/user", userRouter);
app.use("/api/group", groupRouter);

app.use((error, request, response, next) => {
  errorHandler(error, request, response, next);
});

app.listen(process.env.APP_PORT, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", process.env.APP_PORT);
});

module.exports = app;
