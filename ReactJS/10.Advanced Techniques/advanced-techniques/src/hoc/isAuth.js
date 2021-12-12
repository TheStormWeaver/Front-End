import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const isAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { isAuthenticated, user } = useAuth();

    return isAuthenticated ? (
      <Component {...props} user={user} />
    ) : (
      <Navigate to="/login" />
    );
  };

  return WrappedComponent;
};
