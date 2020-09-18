const jwt = require("jsonwebtoken");

/**
 * @method generateToken
 * @summary - generate the json web token
 * @param user array, string jwt_key
 * @returns string token
 */
module.exports = (user, jwt_key) => {
  const token = jwt.sign(
    { email: user[0].email},
    jwt_key,
    { expiresIn: "5000000000000000000000000h" }
  );
  return token;
};
