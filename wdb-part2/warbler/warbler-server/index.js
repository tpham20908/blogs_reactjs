const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

// routes

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });