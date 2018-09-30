const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // email and password must be entered
  if (!email || !password) {
    return res.status(422).send({ error: "Email and password are required!!!" });
  }

  // see if user with given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err); }

    // if user with given email exists, return an error
    if (existingUser) {
      return res.status(422).send({ error: "User already existed." });
    }

    // if user does not exists, create and save new user
    const user = new User({
      email: email,
      password: password
    });

    user.save(err => {
      if (err) { return next(err); }

      // response to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    })
  });
}