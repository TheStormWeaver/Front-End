import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    authService.Logout(user.accessToken).then(() => {
      logout();
      navigate("/dashboard");
    });
  }, []);

  return <Navigate to="/dashboard" />;
};

export default Logout;
