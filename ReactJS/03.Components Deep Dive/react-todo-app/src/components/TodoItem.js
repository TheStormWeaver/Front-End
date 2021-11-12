import { useEffect } from "react";
import "./TodoItem.css"

export default function TodoItem({ todo,  onClick, onDelete }) {
  useEffect(() => {
    console.log(`${todo.id} - Mounted`); //shows while mounting

    return () => {
      //shows while unmounting
      console.log(`${todo.id} - Unmounted`);
    };
  }, [todo.id]); //the array can also be empty, it still works either way

  let listItemClasses = ["todo-item"]
  if(todo.isDone) {
    listItemClasses.push("todo-item-done")
  }

  return (
    <li onClick={() => onClick(todo.id)} className={listItemClasses.join(" ")}>
      {todo.text} <button onClick={(e) => onDelete(e, todo.id)}>x</button>
    </li>
  );
}
