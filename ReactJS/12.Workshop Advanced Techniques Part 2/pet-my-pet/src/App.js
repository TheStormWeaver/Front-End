import { Routes, Route } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import ErrorBoundary from "./components/Common/ErrorBoundary";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import MyPets from "./components/MyPets/MyPets";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Notification from "./components/Common/Notification";
import GuardedRoute from "./components/Common/GuardedRoute";
import { ReactComponent as Logo } from "./pet-logo.svg";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <div id="container">
            <Header />

            <Notification />

            <main id="site-content">
              <Routes>
                <Route path="/" element={<Logo className="logo" />}></Route>
                <Route path="/dashboard/*" element={<Dashboard />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/details/:petId" element={<Details />}></Route>
                <Route element={<GuardedRoute />}>
                  <Route path="/logout" element={<Logout />}></Route>
                  <Route path="/my-pets" element={<MyPets />}></Route>
                  <Route path="/create" element={<Create />}></Route>
                  <Route path="/edit/:petId" element={<Edit />}></Route>
                </Route>
              </Routes>
            </main>

            <footer id="site-footer">
              <p>@PetMyPet</p>
            </footer>
          </div>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
