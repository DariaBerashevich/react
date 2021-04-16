
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import ToDoList from "./ToDoList";

let toDoId = 0;

function ToDoApp() {
    const [input, setInput] = useState("");
    let dispatch = useDispatch();
  
    return (
      <div>
        <form>
          <input
            type="text"
            value={input}
            placeholder="Add to do"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={(e) => {
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
            Add
          </button>
        </form>
        <ToDoList />
      </div>
    );
  }

  export default ToDoApp;