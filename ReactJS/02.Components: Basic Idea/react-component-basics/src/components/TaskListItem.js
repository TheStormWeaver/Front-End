const TaskListItem = (props) => {
  if(props.person) {
    console.log(props.person.name)
  }

  return <li style={{color: props.color}}>{props.children} - {props.person?.name}</li>;
};

export default TaskListItem;
