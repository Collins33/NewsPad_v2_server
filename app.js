const express = require("express");
const app = express();
const morgan = require("morgan");
const databaseConnection = require("./databaseConnect");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make database connection
databaseConnection();

// setup middleware that all requests will go through
const userRoutes = require("./api/routes/user");
/**
 * Give access control
 * to any client
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the news api server"
  });
});

module.exports = app;
