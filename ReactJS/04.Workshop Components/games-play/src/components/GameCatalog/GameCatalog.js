import { useEffect, useState } from "react";

import GameCatalogCard from "./GameCatalogCard";
import { GetAll } from "../services/GameService";

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

      {loading ? (
        <p className="no-articles">Loading....</p>
      ) : games.length > 0 ? (
        games.map((game) => <GameCatalogCard key={game._id} game={game} />)
      ) : (
        <h3 className="no-articles">No games yet</h3>
      )}
    </section>
  );
}

export default GameCatalog;
