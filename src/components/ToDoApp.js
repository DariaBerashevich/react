import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import ToDoList from "./ToDoList";

let toDoId = 0;

function ToDoApp() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addTodo({
              name: input,
              completed: false,
              edit: false,
              id: toDoId++,
            })
          );
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          placeholder="Add to do"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ToDoList />
    </div>
  );
}

export default ToDoApp;
