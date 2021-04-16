import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

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

export default ToDoList;
