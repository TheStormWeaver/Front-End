const CounterItem = (props) => {
  let color = "purple";

  if (props.children > 0 && props.children <= 5) {
    color = "blue"
  } else if (props.children > 5) {
    color = "magenta"
  }
  return (
    <li>
      <p style={{color: color}}>{props.children}</p>
    </li>
  );
};

export default CounterItem;
