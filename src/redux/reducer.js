import { actions } from "./actions";
import { createStore } from "redux";

//reducer
let reducer = (state = [], action) => {
  let toDoList;
  let newToDoList;
  let toDoListChunk;
  switch (action.type) {
    case actions.ADD_TODO:
      toDoList = [...state];
      toDoList.push(action.payload);
      return toDoList;
    case actions.TOGGLE_COMPLETE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case actions.DELETE_TODO:
      toDoList = [...state];
      let index = toDoList.indexOf(action.payload);
      newToDoList = toDoList.splice(0, index);
      toDoListChunk = toDoList.slice(1, toDoList.length);
      return [...newToDoList, ...toDoListChunk];
    case actions.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
      );
    case actions.SUBMIT_EDIT:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, name: action.payload } : todo
      );
    default:
      return state;
  }
};

export const store = createStore(reducer);

export default reducer;
