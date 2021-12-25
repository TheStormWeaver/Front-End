import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

import * as authService from "../../services/authService";
import { useAuthContext } from "../../contexts/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  useEffect(() => {
    authService.Logout(user.accessToken).then(() => {
      logout();
      navigate("/dashboard");
    });
  }, []);

  return <Navigate to="/dashboard" />;
};

export default Logout;
