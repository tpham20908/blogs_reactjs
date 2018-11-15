const mongoose = require("mongoose");

mongoose.connect("mongodb://todos-api-user:todos-api-user-123@ds037067.mlab.com:37067/todos-api", () => console.log("Connect to MongoDB"));
// mongoose.Promise = Promise;
// mongoose.set("debug", true);

module.exports.Todo = require("./todo");