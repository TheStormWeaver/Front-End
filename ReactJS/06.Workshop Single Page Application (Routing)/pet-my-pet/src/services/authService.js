export const Register = (username) => {
  localStorage.setItem("username", username);
};

export const Login = (username) => {
  localStorage.setItem("username", username);
};


export const Logout = () => {
  localStorage.removeItem("username")
};

export const getUsername = () => {
  let username = localStorage.getItem("username");

  return username;
};

export const isAuthenticated = () => {
  return Boolean(getUsername());
};
