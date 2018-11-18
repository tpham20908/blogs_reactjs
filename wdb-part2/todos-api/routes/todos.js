const express = require("express");
const { 
  getTodos, 
  getTodo, 
  newTodo, 
  updateTodo, 
  deleteTodo 
} = require("../helpers/todos");

const router = express.Router();

router.route("/")
  .get(getTodos)
  .post(newTodo);

router.route("/:todoId")
  .get(getTodo)
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;