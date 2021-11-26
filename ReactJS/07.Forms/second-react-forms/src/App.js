import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("Name") //controlled component
  const [services, setServices] = useState([])
  const [isValid, setIsValid] = useState(false);
  const passwordRef = useRef() //combines controlled and uncontrolled component and it is better to use it rarely

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/services")
      .then((res) => res.json())
      .then((res) => {
        setServices(Object.values(res))
      });
  });

  const SubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get("username");
    let password = formData.get("password");
    let services = formData.get("services");
    let isAdmin = formData.get("remembered");

    e.currentTarget.username.value = "" //clear the username field
    console.log(username);
    console.log(password);
    console.log(services);
    console.log(Boolean(isAdmin));
  };

  const onChange = (e) => {
    setUsername(e.target.value)

    if (username < 3) {
      console.error("Too short!");
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const onServiceChange = (e) => {
    setUsername("");
    console.log(e.target.value)

    console.log(passwordRef.current)
    passwordRef.current.value = ""
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={SubmitHandler} className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={username} onChange={onChange} />
          {!isValid && (
            <div style={{ color: "red" }}>This input is invalid</div>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>

        <div>
          <label htmlFor="services">Services</label>
          <select name="services" id="services" onChange={onServiceChange}>
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
