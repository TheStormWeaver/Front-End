import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [services, setServices] = useState([])
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/services")
      .then((res) => res.json())
      .then((res) => {
        setServices(Object.values(res))
      });
  });

  const SubmitHandler = (e) => {
    //uncontrolled  component
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get("username");
    let password = formData.get("password");
    let services = formData.get("services");
    let isAdmin = formData.get("remembered");

    console.log(username);
    console.log(password);
    console.log(services);
    console.log(Boolean(isAdmin));
  };

  const onChange = (e) => {
    let currentText = e.target.value;

    if (currentText > 0 && currentText < 4) {
      console.error("Too short!");
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="App">
      <form method="POST" onSubmit={SubmitHandler} className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={onChange} />
          {!isValid && (
            <div style={{ color: "red" }}>This input is invalid</div>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div>
          <label htmlFor="services">Services</label>
          <select name="services" id="services">
            {services.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="remembered">Remember me</label>
          <input
            type="checkbox"
            name="remembered"
            id="remembered"
            defaultChecked
          />
        </div>

        <input type="submit" value="Login" className="login-btn" />
      </form>
    </div>
  );
}

export default App;
