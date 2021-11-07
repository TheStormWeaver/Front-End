import ToDoListItem from "./ToDoListItem.js"

function ToDoList() {
  return (
    <>
      <h2>ToDo List</h2>

      <ul>
        <ToDoListItem text="Clean the room" title="Room" />
        <ToDoListItem text="Go shopping" title="Shop" />
        <ToDoListItem text="Get some milk" title="Milk" />
        <ToDoListItem text="Improve on react" title="React" />
      </ul>
    </>
  );
}

export default ToDoList;

//function component syntax

// import React from "react"; 
// <React.Fragment>
// </React.Fragment>
// <> is the same as the code above 


/* class component syntax
import React from "react";

class ToDoList extends React.Component {
  render(){
    return(
      <ul>
      <li>Clean the room</li>
      <li>Go shopping</li>
      <li>Improve on react</li>
    </ul>
    );
  }
} 

export default ToDoList;
*/