import React from "react";
import ForceListItem from "./ForceListItem.js";

function ForceList() {
  let todoState = React.useState([  // always in the begging of the component (and not usable in ifs)
    "Think of a Design",
    "View Design",
    "Change Design",
    "Implement Design",
  ]);

  //   let todos = todoState[0]
  //   let setTodos = todoState[1]

  let [todos, setTodos] = todoState;

  return (
    <>
      <h2>Force List</h2>

      <ul>
        {todos.map((item) => (
          <ForceListItem>{item}</ForceListItem>
        ))}
      </ul>

      <button onClick={() => console.log("clicked")}>Modify</button>
    </>
  );
}

export default ForceList;
