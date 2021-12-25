const baseUrl = "http://softuni-rest-api-server.herokuapp.com/users";

export const Register = (email, password) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};

export const Login = async (email, password) => {
  let res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  let jsonResult = await res.json();

  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult;
  }
};

export const Logout = (token) => {
  return fetch(`${baseUrl}/users/logout`, {
    headers: { "X-Authorization": token },
  });
};

export const getUsername = () => {
  let username = localStorage.getItem("username");

  return username;
};

export const isAuthenticated = () => {
  return Boolean(getUsername());
};
