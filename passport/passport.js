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
   console.log(profile.name.givenName)
   const foundUser = await User.find({ email: userEmail });
   console.log(foundUser, "FOUND USER DETAILS")
   if (foundUser.length >= 1)
   {
     return done(null, foundUser)
   }else{
     console.log("User does not exist")
   }
}))


/**
 * Create a user if they do not exist
 */
