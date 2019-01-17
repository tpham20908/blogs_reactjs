const jwt = require("jwt-simple");
const User = require("../models/user");
const { secret } = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

module.exports.signin = function(req, res, next) {
  // user has already had their email and password auth
  // user only needs a token
  res.send({ token: tokenForUser(req.user) });
}

module.exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) { 
    return res.status(412).send({ error: "email and password are required!"});
  }

  // Check to see if user already exists
  User.findOne({ email }, function(err, existingUser) {
    if (err) { return next(err); }
    // if user exists
    if (existingUser) {
      return res.status(412).send({ error: "Email is already in use"});
    }
    // if user with email does not exist, create new user
    const user = new User({
      email,
      password
    });

    user.save(function(err) {
      if (err) { return next(err); }
      // responde to request indicating the user is created
      res.json({ token: tokenForUser(user) });
    })
  })
}