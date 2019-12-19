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

/**
 * @method checkEmptyUserCredentials
 * @summary - ensures all the user credentials are valid
 * @param request body, response body
 * @returns json message
 */
exports.checkEmptyUserCredentials = (req, res, next) => {
  const password = req.body.password.trim();
  const email = req.body.email.trim();
  if (password.length <= 0 || email.length <= 0) {
    res.status(422).json({
      message: "User credentials cannot be empty"
    });
  } else if (password.length < 6) {
    res.status(400).json({
      message: "The length of the password is too short"
    });
  } else {
    next();
  }
};
