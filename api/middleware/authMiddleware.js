const jwt = require("jsonwebtoken");

/**
 * @method checkValidToken
 * @summary - Check to ensure the user has provided a token
 * @param request body, response body
 * @returns json message
 */
exports.checkValidToken = (req, res, next) => {
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
