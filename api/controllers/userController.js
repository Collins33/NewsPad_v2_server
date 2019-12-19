const express = require("express");
const router = express.Router();

// import user schema
const User = require("../models/user");

/**
 * @method users_get_all
 * @summary - return all users
 * @param request body, response body
 * @returns json message
 */
exports.user_get_all = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users.length < 1) {
      res.status(200).json({
        message: "No users"
      });
    }
    res.status(200).json({
      message: "Found users",
      users
    });
  } catch (error) {
    console.log(error);
  }
};
