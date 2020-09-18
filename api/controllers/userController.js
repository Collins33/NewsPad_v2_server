const bycrypt = require("bcrypt");
const mongoose = require("mongoose");
const token_generator = require("../utils/tokenGeneration.js");
const jwt_key = process.env.JWT_KEY;
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

/**
 * @method user_login
 * @summary - sign up a user
 * @param request body, response body
 * @returns json message
 */
exports.user_login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const login_user = await User.find({ email: email });
    if (login_user.length >= 1) {
      const found_user_password = login_user[0].password;
      /**
       * Fails because password removed from user model
       * WILL FIX
       */
      // returns true if the comparison is fine
      try {
        const comparePassword = await bycrypt.compare(
          password,
          found_user_password
        );
        if (comparePassword) {
          const token = token_generator(login_user, jwt_key);
          return res.status(200).json({
            message: "Auth successfully",
            token,
            email
          });
        } else {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
      } catch (error) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
    } else {
      return res.status(401).json({
        message: "The user does not exist"
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error
    });
  }
};


/**
 * @method loginGoogleUser
 * @summary - sign up a user using google auth
 * @param request body, response body
 * @returns json message
 */

exports.loginGoogleUser = async(req, res, next)=>
{
  try{
    const {user} = req;
    const foundUser = await User.find({ email: user });
    if(foundUser.length>=1){
      const token = token_generator(foundUser, jwt_key);
      return res.status(200).json({
        message: "Auth successfully",
        token,
        email: user
    });
    }else{
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        email: user,
      });
      const result = await newUser.save();
      const createdUser = [result]
      const token = token_generator(createdUser, jwt_key);
      return res.status(200).json({
        message: "Auth successfully",
        token,
        email: user
    })
    }
  }catch(error)
  { 
    return res.status(500).json({
      message: "There was an error. Try again",
    });
  }
}

