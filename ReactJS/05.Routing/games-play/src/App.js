import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrorPage404 from "./components/ErrorPage404";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
          {" "}
          //only checks if one rote responds to the given url and then stops
          checking the rest
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/home" exact component={WelcomeWorld} />
          <Route path="/games" exact component={GameCatalog} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/games/:gameId" component={GameDetails} />
          <Route
            path="/logout"
            render={(props) => {
              console.log("Logged out");
              return <Redirect to="/home" />;
            }}
          />
          <Route component={ErrorPage404} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
