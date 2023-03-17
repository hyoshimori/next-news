import styles from "./Nav.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import React, { useState, useEffect } from 'react'


const Nav = () => {

  const [isSwitchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    // Hide when the button is pusshed
    setSwitchOn(!isSwitchOn);
    console.log('rendering!')
  };

  // useEffect(() => {
  //   document.body.className = isSwitchOn ? styles.overlay : '';
  // }, [isSwitchOn]);

  return (
    <div className={styles.body}>
      <MenuIcon data-testid="menu-icon" style={{ cursor: 'pointer' }} className={styles.menu} onClick={toggleSwitch}/>
      <div className={styles.icon__and__message}>
        <h1 className={styles.icon}>NextNews</h1>
        <p className={styles.botto__icon__message}>Geek News +</p>
      </div>
      <div className={styles.category__1}>
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
        </ul>
      </div>
      <div data-testid="category-list" className={`${styles.category__2} ${isSwitchOn ? styles.category__2__show : styles.category__2}`}>
        <ArrowBackIcon data-testid="back-arrow-icon" style={{ cursor: 'pointer' }} className={styles.menu__2} onClick={toggleSwitch}/>
        <ul className={styles.category__2__ul}>
          <a className={styles.list__2} href="#">
            <li>Anime</li>
          </a>
          <a className={styles.list__2} href="#">
            <li>Game</li>
          </a>
          <a className={styles.list__2} href="#">
            <li>Tech</li>
          </a>
          <a className={styles.list__2} href="#">
            <li>Coding</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Nav
