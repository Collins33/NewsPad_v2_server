const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const authMiddleware = require("../middleware/authMiddleware");

// add news article to the database
router.post("/", authMiddleware.checkAuth, newsController.create_news);

module.exports = router;
