import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function Counter() {
  const { counter } = useContext(AuthContext);
  return <h2>{counter}</h2>;
}
