import { useState, useContext } from "react";

import AuthContext from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import Character from "./Character";
import "./CharacterList.css";

export default function CharacterList() {
  const { counter } = useContext(AuthContext);
  const [url, setUrl] = useState("https://swapi.dev/api/people");
  const { state: characters, isLoading, error } = useFetch(url);

  return (
    <>
      <h3>Counter: {counter}</h3>
      <ul>
        {characters.map((x) => (
          <Character key={x.name} name={x.name}></Character>
        ))}
      </ul>
      <button onClick={() => setUrl("https://swapi.dev/api/planets")}>
        Load Planets
      </button>
    </>
  );
}
