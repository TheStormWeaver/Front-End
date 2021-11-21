import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import * as authService from "./services/authService";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import MyPets from "./components/MyPets/MyPets";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { ReactComponent as Logo } from "./petlogo.svg"

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    let user = authService.getUsername();

    setUserInfo({ isAuthenticated: Boolean(user), user: user });
  }, []);

  const onRegisterHandler = (username) => {
    setUserInfo({
      isAuthenticated: Boolean(username),
      user: username
    })
  }

  const onLoginHandler = (username) => {
    setUserInfo({
      isAuthenticated: Boolean(username),
      user: username
    })
  }

  const onLogoutHandler = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null
    })
  }

  return (
    <div id="container">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Logo className="logo" />}></Route>
          <Route path="/dashboard/*" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register onRegisterHandler={onRegisterHandler} />}></Route>
          <Route path="/login" element={<Login onLoginHandler={onLoginHandler} />}></Route>
          <Route path="/logout" element={<Logout onLogoutHandler={onLogoutHandler} />}></Route>
          <Route path="/my-pets" element={<MyPets />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:petId" element={<Details />}></Route>
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>
    </div>
  );
}

export default App;
