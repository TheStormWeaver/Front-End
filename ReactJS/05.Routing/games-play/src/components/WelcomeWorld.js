import { useState, useEffect } from "react";

import { GetLatest } from "../services/GameService";
import LatestGameCard from "./LatestGameCard";

function WelcomeWorld() {
  const [games, setGames] = useState({});

  useEffect(() => {
    GetLatest().then((resultGame) => setGames(resultGame));
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="/images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

        {games.length > 0 ? (
          games.map((game) => <LatestGameCard key={game._id} game={game} />)
        ) : (
          <p className="no-articles">No games yet</p>
        )}
      </div>
    </section>
  );
}

export default WelcomeWorld;
