const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

// add news article to the database
router.post("/", newsController.create_news);

module.exports = router;
