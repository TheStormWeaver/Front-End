const ToDoListItem = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.text}</p> 
    </li>
  );
};

export default ToDoListItem;
