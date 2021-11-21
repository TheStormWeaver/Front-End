import { Navigate } from "react-router";

import * as authService from "../../services/authService";

const Logout = ({ onLogoutHandler }) => {
  authService.Logout();
  onLogoutHandler();

  return <Navigate to="/dashboard" />;
};

export default Logout;
