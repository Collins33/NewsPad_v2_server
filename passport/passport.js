const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;

// Google oath strategy
clientID = process.env.CLIENTID
clientSecret = process.env.CLIENTSECRET
console.log(clientID, clientSecret, "CLIENT SECRET AND ID")

passport.use("googleToken", new GoogleTokenStrategy({
  clientID,
  clientSecret
}, async(accessToken, refreshToken, profile, done)=>{
   const userEmail = profile.emails[0].value
   return done(null, userEmail)
}));
