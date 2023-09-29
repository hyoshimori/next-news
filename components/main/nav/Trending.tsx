import styles from "../../style/Trending.module.css";
import Search from "../search/Search";

const Trending = () => {
  return (
    <div className={styles.body}>
      <p style={{ color: "#FEC005" }}>Trending</p>
      <Search />
    </div>
  );
};
export default Trending;
