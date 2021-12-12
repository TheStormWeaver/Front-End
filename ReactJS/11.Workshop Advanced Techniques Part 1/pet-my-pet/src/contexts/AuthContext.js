import { createContext, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", {
    _id: "",
    email: "",
    accessToken: "",
  });

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    //sets the user value to the default empty one
    setUser({
      _id: "",
      email: "",
      accessToken: "",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authState = useContext(AuthContext);

  return authState;
};
