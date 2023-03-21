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

  // define the type of the categoryHandler function. //
  const categoryHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('Button clicked!', (event.target as HTMLButtonElement).innerHTML);
  };


  return (
    <div className={styles.body}>
      <MenuIcon data-testid="menu-icon" style={{ cursor: 'pointer' }} className={styles.menu} onClick={toggleSwitch}/>
      <div className={styles.icon__and__message}>
        <h1 className={styles.icon}>NextNews</h1>
        <p className={styles.botto__icon__message}>Geek News +</p>
      </div>
      <div className={styles.category__1}>
        <ul className={styles.category}>
          <a className={styles.list}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Anime</li></button>
          </a>
          <a className={styles.list}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Game</li></button>
          </a>
          <a className={styles.list}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Tech</li></button>
          </a>
          <a className={styles.list}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Coding</li></button>
          </a>
        </ul>
      </div>
      <div data-testid="category-list" className={`${styles.category__2} ${isSwitchOn ? styles.category__2__show : styles.category__2}`}>
        <ArrowBackIcon data-testid="back-arrow-icon" style={{ cursor: 'pointer' }} className={styles.menu__2} onClick={toggleSwitch}/>
        <ul className={styles.category__2__ul}>
          <a className={styles.list__2}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Anime</li></button>
          </a>
          <a className={styles.list__2}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Game</li></button>
          </a>
          <a className={styles.list__2}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Tech</li></button>
          </a>
          <a className={styles.list__2}>
            <button className={styles.button__nav} onClick={categoryHandler}><li>Coding</li></button>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Nav
