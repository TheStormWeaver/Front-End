import { Suspense } from "react";
import { useEffect, useState, lazy } from "react";

import { GetAll } from "../../services/GameService";
// import GameCatalogCard from "./GameCatalogCard";
const GameCatalogCard = lazy(() => import("./GameCatalogCard")); // cannot be imported directly anywhere else, except with lazy(), otherwise the code-splitting will not work as intended

function GameCatalog() {
  const [games, gamesState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      GetAll().then((gamesResult) => {
        gamesState(gamesResult);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      <Suspense fallback={<p>Loading...</p>}>
      {loading ? (
        <p className="no-articles">Loading....</p>
      ) : games.length > 0 ? (
        games.map((game) => <GameCatalogCard key={game._id} game={game} />) //used to pass the nav to the display, so that we can view it without an actual router
      ) : (
        <h3 className="no-articles">No games yet</h3>
      )}
      </Suspense>
    </section>
  );
}

export default GameCatalog;
