import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

const Login = ({ onLoginHandler }) => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");

    authService.Login(email);

    onLoginHandler(email);

    navigate("/dashboard");
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
