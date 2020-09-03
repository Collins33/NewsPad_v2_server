const jwt = require("jsonwebtoken");

const createToken = function(auth)
{
  return jwt.sign({
    id: auth.id
  },jwt_key,
  { expiresIn: "5000000000000000000000000h" })
}

module.exports = {
  generateToken: function(req, res, next)
  {
    req.token = createToken(req.auth);
    return next()
  },
  sendToken: function(req, res, next)
  {
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user))
  }
}