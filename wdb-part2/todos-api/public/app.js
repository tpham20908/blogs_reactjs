$(document).ready(() => {
  $.getJSON("/api/todos")
    .then(getTodos);

  $("#todoInput").keypress(e => {
    if (e.which === 13) {
      createTodo();
    }
  })
})

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
  const newTodo = $("<li class='task'>" + todo.name + "</li>");
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}