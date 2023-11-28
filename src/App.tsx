import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { CategoryName } from './models/category';
import Game from './components/game/Game';
import { ApiCall } from './helpers/ApiCall';
import { Game as GameModel } from './models/game';
import { API } from './constants/api';
import { HeaderName } from './models/header';
import { Jackpot } from './models/jackpot';

function App() {
  const [active, setActive] = useState(HeaderName.top);
  const [games, setGames] = ApiCall<GameModel[]>(API.GET_GAMES, { method: "GET"});
  const [jackpots, setJackpots] = ApiCall<Jackpot[]>(API.GET_JACKPOTS, { method: "GET"}, 4000);

  return (
    <>
      <Header active={active} setActive={setActive}/>
      <Game games={games} active={active} jackpots={jackpots}/>
    </>
  );
}

export default App;
