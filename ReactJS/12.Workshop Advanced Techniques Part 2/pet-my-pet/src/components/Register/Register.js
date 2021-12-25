import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { useAuthContext } from "../../contexts/AuthContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";

const Register = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();

  const onRegister = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("confirm-pass");

    authService.Register(email, password).then((authData) => {
      login(authData);
      addNotification("You registered successfully", types.success);
      navigate("/dashboard");
    });
  };

  return (
    <section id="register-page" className="register">
      <form id="register-form" method="POST" onSubmit={onRegister}>
        <fieldset>
          <legend>Register Form</legend>
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
          <p className="field">
            <label htmlFor="repeat-pass">Repeat Password</label>
            <span className="input">
              <input
                type="password"
                name="confirm-pass"
                id="repeat-pass"
                placeholder="Repeat Password"
              />
            </span>
          </p>
          <input className="button submit" type="submit" value="Register" />
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
