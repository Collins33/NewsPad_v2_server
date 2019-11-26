const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the news api server"
  });
});

module.exports = app;
