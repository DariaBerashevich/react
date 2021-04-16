//actions
export const actions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  EDIT_TODO: "EDIT_TODO",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  SUBMIT_EDIT: "SUBMIT_EDIT",
};

export function addTodo(todo) {
  return {
    type: actions.ADD_TODO,
    payload: todo,
  };
}
export function toggleComplete(id) {
  return {
    type: actions.TOGGLE_COMPLETE,
    id,
  };
}
export function deleteToDo(todo) {
  return {
    type: actions.DELETE_TODO,
    payload: todo,
  };
}
export function editToDo(id) {
  return {
    type: actions.EDIT_TODO,
    id,
  };
}
export function submitEdit(todo) {
  return {
    type: actions.SUBMIT_EDIT,
    payload: todo.name,
    id: todo.id,
  };
}
