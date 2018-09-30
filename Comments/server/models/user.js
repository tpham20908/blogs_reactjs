const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// on save hook, encript password
userSchema.pre("save", function(next) {
  const user = this;

  // generate salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    // hash password using salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }

      // overwrite plain text password with encripted password
      user.password = hash;
      console.log(user.password);
      next();
    });
  });
})

// create model class
const ModelClass = mongoose.model("user", userSchema);

// export the model
module.exports = ModelClass; 