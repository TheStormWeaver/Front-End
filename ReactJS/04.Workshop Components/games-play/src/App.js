import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrorPage404 from "./components/ErrorPage404";

function App() {
  const [page, setPage] = useState("/home");

  const routes = {
    "/home": <WelcomeWorld />,
    "/games": <GameCatalog />,
    "/create-game": <CreateGame />,
    "/register": <Register />,
    "/login": <Login />,
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <ErrorPage404 />}
      </main>
    </div>
  );
}

export default App;
