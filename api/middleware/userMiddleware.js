const User = require("../models/user");

/**
 * @method checkExistingEmail
 * @summary - ensures the email is unique
 * @param request body, response body
 * @returns json message
 */
exports.checkExistingEmail = async (req, res, next) => {
  try {
    const userEmail = req.body.email;
    // find one returns a query
    const user = await User.findOne({ email: userEmail });
    if (user) {
      // 400 means the server cannot process the
      // request due to an error caused by the client
      res.status(400).json({
        message: "The passed email already exists"
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      err: error
    });
  }
};
