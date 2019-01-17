const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");
const { secret } = require("../config");
const User = require("../models/user");

// setup options for local Strategy
const localOptions = { usernameFiels: "email" }

// create local Strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // find user with email input
  User.findOne({ email: email }, function(err, user) {
    if(err) { return done(err); }
    if(!user) { return done(null, false); }

    // compare password: password and user.password
    user.comparePassword(password, function(err, isMatch) {
      if(err) { return done(err); }
      if(!isMatch) { return done(null, false); }

      return done(null, user);
    })
  })
})

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secret
}

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // payload here is { sub: user.id, iat: timestamp } object in jwt.encode in authentication.js

  // see if the user ID in payload exists in database
  User.findById(payload.sub, function(err, user) {
    if(err) { return done(err, false); }

    // if it does, call done with that user
    if(user) {
      done(null, user);
    } 
    // otherwise, call done without user object
    else {
      done(null, false);
    }
  })
})

// tell passport to use these strategy
passport.use(jwtLogin);
passport.use(localLogin);