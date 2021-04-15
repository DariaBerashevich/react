import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../src/redux/redux.js";
import { toggleComplete } from "../src/redux/redux.js";
import { deleteToDo } from "../src/redux/redux.js";
import { editToDo } from "../src/redux/redux.js";

import "./App.css";
let ToDoId = 0;
function App() {
  return (
    <div className="App">
      <InputToDoList />
    </div>
  );
}
function InputToDoList() {
  let [input, setInput] = useState("");
  let dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Add to do"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              name: input,
              completed: false,
              edit: false,
              id: ToDoId++,
            })
          );
          setInput("");
        }}
      >
        Add
      </button>
      <ToDoList />
    </div>
  );
}

function ToDoList() {
  const todos = useSelector((state) => state);

  return (
    <div>
      {todos.map((todo) => {
        return <ToDoItem todo={todo} />;
      })}
    </div>
  );
}

function ToDoItem(props) {
  let { todo } = props;
  let dispatch = useDispatch();
  const [newInput,setNewInput] = useState(todo.name)

  return (
    <div>
      <div
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        onClick={() => dispatch(toggleComplete(todo.id))}
        className="toDo"
        key={todo.id}
      >
        {todo.name = newInput}
      </div>
      <input
        value={newInput}
        style={{ display: todo.edit ? "inline-block" : "none" }}
        onChange={(e)=>{setNewInput(e.target.value)}}
      />
      <button
        className="button"
        style={{ display: todo.edit ? "inline-block" : "none" }}
        onClick={() => {
          dispatch(editToDo(todo.id));
        }}
      >
        OK
      </button>
      <button
        className="button"
        style={{ display: !todo.edit ? "inline-block" : "none" }}
        onClick={() => dispatch(deleteToDo(todo))}
      >
        Delete
      </button>
      <button
        className="button"
        style={{ display: !todo.edit ? "inline-block" : "none" }}
        onClick={() => dispatch(editToDo(todo.id))}
      >
        Edit
      </button>
    </div>
  );
}

export default App;
