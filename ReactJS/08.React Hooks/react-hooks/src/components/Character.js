import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function Character({ name} ) {
  const { addHobby } = useContext(AuthContext);
  return <li onClick={() => addHobby(name)}>{name}</li>;
}
