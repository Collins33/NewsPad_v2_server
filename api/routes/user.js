const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/userMiddleware.js");

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
router.post("/auth/google", userController.loginGoogleUser);


module.exports = router;
