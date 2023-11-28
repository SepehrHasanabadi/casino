import { CategoryName } from "../../models/category";
import { Game as GameModel } from "../../models/game";
import { Jackpot } from "../../models/jackpot";
import styles from './Game.module.scss'
import GameCard from "./GameCard";

const Game = ({games, active, jackpots}: {
  games?: GameModel[],
  jackpots?: Jackpot[],
  active: CategoryName | CategoryName[],
}) => {
  let categoryGame;
  if (Array.isArray(active)) {
    categoryGame = games?.filter(item => active.includes(item.categories[0]))
  } else {
    categoryGame = games?.filter(item => item.categories.includes(active))
  }
  const jackpotDict: {[key: string]: number} = {};
  jackpots?.forEach(item => jackpotDict[item.game] = item.amount);

  return (
    <div className={styles.grid}>
      {categoryGame && categoryGame.map(item => 
        <GameCard category={active} key={item.id} item={item} jackpot={jackpotDict[item.id]}/>
      )}
    </div>
  );
}

export default Game;