// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const router = require("./router");

// DB setup
mongoose.connect("mongodb://commentsUser:Test-1234@ds151943.mlab.com:51943/comments_db", () => {
  console.log("Connected to DB");
})

// App setup
app.use(morgan("combined"));
app.use(bodyParser.json("*/*"));
router(app);

// Server setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log("Server is listening on port:", port);