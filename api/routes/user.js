const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/userMiddleware.js");

router.get("/", userController.user_get_all);
router.post(
  "/",
  userMiddleware.checkExistingEmail,
  userMiddleware.checkEmptyUserCredentials,
  userController.create_user
);

module.exports = router;
