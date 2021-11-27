import { useState } from "react";

import AuthContext from "./contexts/AuthContext";

import "./App.css";
import Counter from "./components/Counter";
import CharacterList from "./components/CharacterList";
import useDidMount from "./hooks/useDidMount";

function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [info, setInfo] = useState({
    name: "Peter",
    age: 32,
    hobbies: ["1", "2", "3"],
  });

  useDidMount(() => {
    //useEffect substitute demo hook
    setTimeout(() => {
      setName("Person");
    }, 1500);
  }, [counter]);

  const addHobby = (hobby) => {
    setInfo((oldState) => ({
      ...oldState,
      age: 32,
      hobbies: [...oldState.hobbies, hobby],
    }));
  };

  return (
    <AuthContext.Provider value={{ counter, user: info, addHobby }}>
      <div className="App">
        <h2>{!name ? "Loading..." : name}</h2>

        {counter < 10 ? <Counter /> : null}

        <button onClick={() => setCounter((x) => x + 1)}>+</button>

        <h3>Hobbies</h3>
        {info.hobbies.map((x) => (
          <li key={x}>{x}</li>
        ))}
        <CharacterList />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
   