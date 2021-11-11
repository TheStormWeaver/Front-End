import React from "react";
import CounterItem from "./CounterItem";

function Counter() {
  let [count, setCount] = React.useState(0);
  let [name, setName] = React.useState("");

  const addButtonClickHandler = () => {
    setCount(count + 1);
  };

  const inputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const mainHello = (
    <main>
      <h2>You entered React</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        quisquam.
      </p>
    </main>
  );

  return (
      //{name && <h2>Counter - {name}</h2>} only displays when there is something written on the input
    <>
      <h2>Counter - {name}</h2>

      {name == "React" //ternary operator demo
       ? mainHello
       : <h2>Hello There</h2>}

      <ul>
        <CounterItem>{count}</CounterItem>
      </ul>

      <input type="text" onBlur={inputChangeHandler} />

      <button onClick={addButtonClickHandler}>Add +1</button>
    </>
  );
}

export default Counter;
