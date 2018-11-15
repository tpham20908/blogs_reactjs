const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const app = express();
const port = process.env.PORT || 3001;

// Server setup
app.listen(port, () => console.log("App is running on port " + port));

// app setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/todos", todoRoutes);

// db setup
