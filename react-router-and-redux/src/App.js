import React from "react";
import { createStore } from "redux";

// constant variables to hold action type
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

//action creator
const addItem = item => {
  return {
    type: ADD_ITEM,
    item: item
  };
};
const deleteItem = index => {
  return {
    type: DELETE_ITEM,
    index: index
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      // return new state with added item
      return [...state, action.item];
    case DELETE_ITEM:
      // return new state with deleted item (state[action.index])
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      // otherwise, just return the old state
      return state;
  }
};

const store = createStore(reducer);

// trigger a console log every time the store updates
const unsubscribe = store.subscribe(() => console.log (store.getState()));
store.dispatch(addItem("apple"));
store.dispatch(addItem("banana"));
store.dispatch(addItem("cherry"));
// To unsubscribe, call the method that is returned by store.subscribe()
// stop subscribing to store updates
unsubscribe();
// this will not logged by console
store.dispatch(addItem("carrot"));

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}


export default App;