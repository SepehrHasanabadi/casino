import { CategoryName } from '../../models/category';
import { HeaderName, HeaderNameInterface } from '../../models/header';
import styles from './Header.module.scss'


const Header = ({active, setActive}: {
  active?: CategoryName,
  setActive: (item: any) => void
}) => {
  return (
    <div className={styles.row}>
      {Object.keys(HeaderName).map(key => {
        const colStyle = [styles.col]
        if (active === HeaderName[key as keyof HeaderNameInterface]) colStyle.push(styles.select)
        return <div 
          key={key} className={colStyle.join(' ')}
          onClick={() => setActive(HeaderName[key as keyof HeaderNameInterface])}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
      })}
    </div>
  );
}

export default Header;