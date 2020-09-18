const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const bycrypt = require("bcrypt");
const mongoose = require("mongoose");

const User = require("../api/models/user");
const jwt_key = process.env.JWT_KEY;
const tokenGenerator = require("../api/utils/tokenGeneration");

// Google oath strategy
clientID = process.env.CLIENTID
clientSecret = process.env.CLIENTSECRET


passport.use("googleToken", new GoogleTokenStrategy({
  clientID,
  clientSecret
}, async(accessToken, refreshToken, profile, done)=>{
   const userEmail = profile.emails[0].value
   return done(null, userEmail)
  //  const foundUser = await User.find({ email: userEmail });
  //  if (foundUser.length >= 1)
  //  {
  //    return done(null, foundUser)
  //  }else{
  //    console.log("User does not exist")
  //  }
}))


/**
 * Create a user if they do not exist
 */
