import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .Login(email, password)
      .then((authData) => {
        login(authData);

        navigate("/dashboard");
      })
      .catch((err) => {
        //TODO: show notifications
        console.log(err);
      });
  };

  return (
    <section id="login-page" className="login">
      <form id="login-form" onSubmit={onLogin} method="POST">
        <fieldset>
          <legend>Login Form</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input type="text" name="email" id="email" placeholder="Email" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </span>
          </p>
          <input className="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
