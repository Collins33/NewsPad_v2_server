const express = require("express");
const passport = require("passport")
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/userMiddleware.js");
const passportConf = require("../../passport/passport");

router.get("/", userController.user_get_all);

// user registration route
router.post(
  "/registration",
  userMiddleware.checkExistingEmail,
  userMiddleware.checkEmptyUserCredentials,
  userController.create_user
);

// user login route
router.post("/login", userController.user_login);

// google auth endpoint
router.post(
  "/auth/google", 
  passport.authenticate("googleToken", {session:false}),
  userController.loginGoogleUser
);


module.exports = router;
