import { CategoryName } from '../../models/category';
import { Game } from '../../models/game';
import styles from './CameCard.module.scss'

const GameCard = ({item, category, jackpot}: {
  item: Game,
  category: CategoryName | CategoryName[],
  jackpot?: number,
}) => {
  const showNew = () => {
    if (Array.isArray(category))
      return '';
    if (category === CategoryName.new || category === CategoryName.top) 
      return '';
    if(item.categories.includes(CategoryName.new))
      return 'NEW'
      if(item.categories.includes(CategoryName.top))
      return 'TOP'
  };
  const newTag = showNew();
  return(
    <div className={styles.item}>
      <img 
      className={styles.image}
      src={item.image}
    />
      {jackpot && <span className={styles.jackpot}>£{jackpot.toLocaleString()}</span>}
      
      <div className={styles.overlay}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.play}>PLay</div>
      </div>
      {newTag && <span className={styles.ribbon}>{newTag}</span>}
    </div>
  )
}

export default GameCard;