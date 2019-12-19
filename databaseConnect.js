const mongoose = require("mongoose");
require("dotenv").config;

module.exports = async () => {
  const environment = process.env.ENVIRONMENT;
  const databaseConnection = process.env.MONGO_DATABASE_URL;
  if (environment == "local") {
    try {
      await mongoose.connect(databaseConnection, { useNewUrlParser: true });
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Use the default node js promise
   */
  mongoose.Promise = global.Promise;
};
