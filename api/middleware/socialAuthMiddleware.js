const jwt = require("jsonwebtoken");

/**
 * @method verifySocialAuthToken
 * @summary - Check to ensure the token provided is valid
 * @param request body, response body
 * @returns json message
 */
exports.verifySocialAuthToken = (req, res, next) => {
  try {
    const headerToken = req.headers["authorization"];
    const token = headerToken.slice(7, headerToken.length);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.decodedToken = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Provide a valid token"
    });
  }
};

/**
 * @method extractUserInformation
 * @summary - extract user info from the provided token
 * @param request body, response body
 * @returns json message with user information
 */
exports.extractUserInformation = (req, res, next) => {
  try {
    const headerToken = req.headers["authorization"];
    const token = headerToken.slice(7, headerToken.length);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.decodedToken = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Provide a valid token"
    });
  }
};