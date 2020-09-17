const jwt = require("jsonwebtoken");

/**
 * @method generateToken
 * @summary - generate the json web token
 * @param user array, string jwt_key
 * @returns string token
 */
module.exports = (user, jwt_key) => {
  const token = jwt.sign(
    { id: user[0]._id},
    jwt_key,
    { expiresIn: "5000000000000000000000000h" }
  );
  return token;
};
