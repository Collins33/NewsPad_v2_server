const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.user_get_all);

module.exports = router;
