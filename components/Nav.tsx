import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <div className={styles.body}>
      <div className={styles.icon__and__message}>
        <h1 className={styles.icon}>NextNews</h1>
        <p className={styles.botto__icon__message}>Geek News +</p>
      </div>
      <ul className={styles.category}>
        <a className={styles.list} href="#">
          <li>Anime</li>
        </a>
        <a className={styles.list} href="#">
          <li>Game</li>
        </a>
        <a className={styles.list} href="#">
          <li>Tech</li>
        </a>
        <a className={styles.list} href="#">
          <li>Coding</li>
        </a>
        {/* <a className={styles.list} href="#">
          <li>Geek</li>
        </a> */}
      </ul>
    </div>
  )
}

export default Nav
