const express = require("express");
const app = express();
const morgan = require("morgan");
const databaseConnection = require("./databaseConnect");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

databaseConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the news api server"
  });
});

module.exports = app;
