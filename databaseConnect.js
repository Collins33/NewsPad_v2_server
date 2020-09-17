const mongoose = require("mongoose");
require("dotenv").config;

module.exports = async () => {
  const environment = process.env.ENVIRONMENT;
  const databaseConnection = process.env.MONGO_DATABASE_URL;
  const productionDatabaseConnection =
    process.env.MONGO_DATABASE_PRODUCTION_URL;

  if (environment == "local") {
    try {
      await mongoose.connect(databaseConnection, { useNewUrlParser: true });
    } catch (error) {
      console.log(error);
    }
  }
  try {
    await mongoose.connect(productionDatabaseConnection, {
      useNewUrlParser: true
    });
  } catch (error) {
    console.log(error);
  }
  /**
   * Instruct moongose on what promise lib to use
   * Use the default node js promise
   */
  mongoose.Promise = global.Promise;
};
