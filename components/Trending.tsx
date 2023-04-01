import styles from './Trending.module.css';
import Search from './Search'

const Trending = () => {

  return (
  <div className={styles.body}>
    <p style={{ color: "#FEC005" }}>Trending</p>
    <Search />
  </div>
  )
}
export default Trending
