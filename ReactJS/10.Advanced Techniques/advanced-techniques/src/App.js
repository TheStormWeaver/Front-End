import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./ErrorBoundary";

import Header from "./components/Header";
import Login from "./components/Login";
import Dogs from "./components/Dogs";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="site-wrapper">
          <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dogs" element={<Dogs />} />
          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
