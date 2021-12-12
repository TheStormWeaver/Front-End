import { createContext, useContext, useState, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  email: "",
  accessToken: "",
  accessToken: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {...state, email: action.payload}
      break;

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState({});
  const [user, dispatch] = useReducer(reducer, initialState);

  const login = (email) => {
    /*
    setUser({
      email,
      accessToken: "",
      accessToken: "",
    });
    */

    dispatch({
      type: "LOGIN",
      payload: email,
    });
  };

  const logout = () => dispatch({type: "LOGOUT"})

  return (
    <AuthContext.Provider
      value={{ user, login, isAuthenticated: Boolean(user.email) }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  // custom hook that is directly imported and can skip a few repeatable imports (import AuthContext and UseContext)
  const authState = useContext(AuthContext);

  return authState;
};
