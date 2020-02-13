const mongoose = require("mongoose");
const newSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  urlToImage: { type: String, required: true },
  source: { type: String, required: true }
});

module.exports = mongoose.model("News", newSchema);
