const mongoose = require("mongoose");
const News = require("../models/user");

/**
 * @method create_news
 * @summary - save a news article in the database
 * @param request body, response body
 * @returns json message
 */

exports.create_news = async (req, res, next) => {
  const author = req.body.author;
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const urlToImage = req.body.urlToImage;
  const source = req.body.source;
  try {
    const news = new News({
      _id: new mongoose.Types.ObjectId(),
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
    res.status(500).json({
      message: "There was an error in the operation"
    });
  }
};
