const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const authMiddleware = require("../middleware/authMiddleware");
// add news article to the database
router.post("/", authMiddleware.checkValidToken, newsController.create_news);

// retrieve the news article that you saved
router.get("/", authMiddleware.checkValidToken, newsController.get_news);

module.exports = router;
