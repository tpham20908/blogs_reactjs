const mongoose = require("mongoose");

const mlabUrl = "mongodb://todos-api-user:todos-api-user-123@ds037067.mlab.com:37067/todos-api";
// const mlabUrl = "mongodb://crosemont:crosemont-123@ds011321.mlab.com:11321/crosemont"

mongoose.connect(mlabUrl, () => console.log("Connect to MongoDB"));
mongoose.Promise = Promise;
mongoose.set("debug", true);

module.exports.Todo = require("./todo");