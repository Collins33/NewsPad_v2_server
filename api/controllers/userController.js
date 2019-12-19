const express = require("express");
const router = express.Router();
const bycrypt = require("bcrypt");
const mongoose = require("mongoose");

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

/**
 * @method create_user
 * @summary - creates a user in the database
 * @param request body, response body
 * @returns json message
 */
exports.create_user = async (req, res, next) => {
  const password = req.body.password;
  const email = req.body.email;
  try {
    const hash = await bycrypt.hash(password, 10);
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email: email,
      password: hash
    });
    const result = await user.save();
    res.status(201).json({
      message: "User was created successfully"
    });
  } catch (error) {
    res.status(500).json({
      error: err
    });
  }
};
