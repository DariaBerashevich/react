import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteToDo,
  submitEdit,
  editToDo,
  toggleComplete,
} from "../redux/actions";

function ToDoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const [newInput, setNewInput] = useState(todo.name);

  return (
    <div>
      {todo.edit === false && (
        <div>
          <div
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
            onClick={() => dispatch(toggleComplete(todo.id))}
            className="toDo"
            key={todo.id}
          >
            {todo.name}
          </div>
          <button className="button" onClick={() => dispatch(deleteToDo(todo))}>
            Delete
          </button>
          <button
            className="button"
            onClick={() => dispatch(editToDo(todo.id))}
          >
            Edit
          </button>
        </div>
      )}
      {todo.edit === true && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(editToDo(todo.id));
              dispatch(submitEdit({ id: todo.id, name: newInput }));
            }}
          >
            <input
              value={newInput}
              onChange={(e) => {
                setNewInput(e.target.value);
              }}
            />
            <button className="button" type="submit">
              OK
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
