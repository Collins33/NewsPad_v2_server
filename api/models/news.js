const mongoose = require("mongoose");
const newSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: { type: String, required: false },
  author: { type: String },
  title: { type: String },
  description: { type: String },
  url: { type: String, unique: true },
  urlToImage: { type: String },
  source: { type: String }
});

module.exports = mongoose.model("News", newSchema);
