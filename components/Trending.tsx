import styles from './Trending.module.css';
import Search from './Search'

const Trending = () => {

  return (
  <div className={styles.body}>
    <p style={{ fontWeight: "bold", marginBottom: "20px", marginTop: "8px" }}>Trending</p>
    <Search />
  </div>
  )
}
export default Trending
