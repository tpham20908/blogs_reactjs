$(document).ready(() => {
  $.getJSON("/api/todos")
    .then(getTodos);
})

const getTodos = (todos) => {
  todos.map(todo => {
    const newTodo = $("<li class='task'>" + todo.name + "</li>");
    if (todo.completed) {
      newTodo.addClass("done");
    }
    $(".list").append(newTodo);
  })
}