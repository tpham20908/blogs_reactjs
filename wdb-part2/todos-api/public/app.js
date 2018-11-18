$(document).ready(() => {
  // Retrieve todos
  $.getJSON("/api/todos")
    .then(getTodos);

  // Create todo
  $("#todoInput").keypress(e => {
    if (e.which === 13) {
      createTodo();
    }
  })

  // Delete todo
  $(".list").on("click", "span", function(e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  })

  // Update todo
  $(".list").on("click", "li", function() {
    updateTodo($(this));
  })
})

const updateTodo = todo => {
  const todoId = todo.data("id");
  const isDone = !todo.data("completed");
  todo.toggleClass("done");
  $.ajax({
    method: "PUT",
    url: `/api/todos/${todoId}`,
    data: { completed: isDone }
  });
  todo.data("completed", isDone);
}

const removeTodo = todo => {
  const todoId = todo.data("id");
  $.ajax({
    method: "DELETE",
    url: `/api/todos/${todoId}`
  })
  .then(() => {
    todo.remove();
  })
  .catch(err => console.log(err));
}

const createTodo = () => {
  var todoInput = $("#todoInput").val();
  if (todoInput) {
    $.post("/api/todos", { name: todoInput })
      .then(newTodo => addTodo(newTodo))
      .catch(err => console.log(err));
    $("#todoInput").val("");
  } else {
    alert("Todo cannot be empty!");
  }
}

const getTodos = (todos) => {
  todos.map(todo => addTodo(todo));
}

const addTodo = todo => {
  const newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}