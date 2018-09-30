// Main starting points of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const app = express();

// DB setup
mongoose.connect("mongodb://tpham20908:Dicom-1234@ds161008.mlab.com:61008/comments-dev", () => {
  console.log("Connected to DB.");
})

// App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log("Server is listening on: " + port);