var initialState = {
	todos: [],
	id: 0
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			let newState = { ...state };
			newState.id++;
			newState.todos = [...newState.todos, { task: action.task, id: newState.id }];
			return newState;
		case "DELETE_TODO":
			let todos = state.todos.filter(todo => todo.id !== action.id);
			debugger
			return { ...state, todos };
		default:
			return state;
	}
}

const store = Redux.createStore(rootReducer);

$(document).ready(() => {
	$("ul").on("click", "button", e => {
		store.dispatch({ type: "DELETE_TODO", id: e.target.id });
	})

	$("form").on("submit", e => {
		e.preventDefault();
		let newTask = $("#task").val();
		store.dispatch({ type: "ADD_TODO", task: newTask });
		let currentState = store.getState();
		let newLi = $("<li>", {
			text: newTask
		});
		let btn = $("<button>", {
			text: "X",
			id: currentState.id
		})
		$(newLi).append(btn);
		$("#list").append(newLi);
		$("form").trigger("reset");
	})
})