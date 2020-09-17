const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const bycrypt = require("bcrypt");
const mongoose = require("mongoose");

const User = require("../api/models/user");
// Google oath strategy
clientID = process.env.CLIENTID
clientSecret = process.env.CLIENTSECRET


passport.use("googleToken", new GoogleTokenStrategy({
  clientID,
  clientSecret
}, async(accessToken, refreshToken, profile, req, done)=>{
  //  console.log(accessToken, "ACCESS TOKEN")
  //  console.log(profile,     "USER PROFILE")
  //  console.log(profile.emails[0].value)
   const userEmail = profile.emails[0].value
   console.log(profile.name.givenName)
   const foundUser = await User.find({ email: userEmail });
   console.log(foundUser, "FOUND USER DETAILS")
}))


/**
 * Create a user if they do not exist
 */
