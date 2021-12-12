import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form"; //only imports the used content, rather than the whole thing
import Button from "react-bootstrap/Button"; //but it does not change anything if stuff is already imported from the other way (import { stuff } from "...")

import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);

    navigate("/");
  };

  if(Math.random() > 0.5){
    throw new Error("Sorry")
  }

  return (
    <Form onSubmit={loginSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
