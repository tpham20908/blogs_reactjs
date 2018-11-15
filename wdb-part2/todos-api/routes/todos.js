const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/", function(req, res) {
  db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => {
      res.status(201).json(newTodo)
    })
    .catch(err => res.send(err));
});

router.get("/:todoId", function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
})

module.exports = router;