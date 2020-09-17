const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;

// Google oath strategy
clientID = process.env.CLIENTID
clientSecret = process.env.CLIENTSECRET

passport.use("googleToken", new GoogleTokenStrategy({
  clientID,
  clientSecret
}, async(accessToken, refreshToken, profile, done)=>{
   console.log(accessToken, "ACCESS TOKEN")
   console.log(profile,     "USER PROFILE")
}))