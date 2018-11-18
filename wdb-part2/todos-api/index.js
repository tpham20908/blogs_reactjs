const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const app = express();
const port = process.env.PORT || 3001;

// Server setup
app.listen(port, () => console.log("App is running on port " + port));

// app setup: api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app setup: UI
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

// db setup
