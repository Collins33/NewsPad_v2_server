const passport = require('passport');
// instruct Passport to use new instance of Google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy());