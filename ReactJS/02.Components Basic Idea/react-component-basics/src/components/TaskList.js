import TaskListItem from "./TaskListItem";

function TaskList() {
  let secondTask = "Change Color";
  let thirdColor = "lightblue";
  let person = {
    name: "Pesho",
    age: 20,
  };

  return (
    <>
      <h2>Tasks</h2>

      <ul>
        <TaskListItem color="blue">
          <p>Change Hat</p>
          <p>Change Clothes</p>
        </TaskListItem>
        <TaskListItem color="red">
          <p>{secondTask}</p>
        </TaskListItem>
        <TaskListItem color={thirdColor}>
          <p>Change Style</p>
        </TaskListItem>
        <TaskListItem color="pink" person={person}>
          <p>Change Vision</p>
        </TaskListItem>
      </ul>
    </>
  );
}

export default TaskList;
