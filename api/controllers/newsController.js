const mongoose = require("mongoose");
const News = require("../models/news");
const jwt = require("jsonwebtoken");

/**
 * @method create_news
 * @summary - save a news article in the database
 * @param request body, response body
 * @returns json message
 */

exports.create_news = async (req, res, next) => {
  const { author, title, description, url, urlToImage, source } = req.body;
  try {
    const headerToken = req.headers["authorization"];
    const token = headerToken.slice(7, headerToken.length);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = decoded.email;
    const news = new News({
      _id: new mongoose.Types.ObjectId(),
      user,
      author,
      title,
      description,
      url,
      urlToImage,
      source
    });
    const savedNews = await news.save();
    res.status(201).json({
      message: "News article was successfully created",
      savedNews
    });
  } catch (error) {
    console.log(error, "<><><><><><><><><><>");
    res.status(500).json({
      message: "There was an error in the operation"
    });
  }
};
