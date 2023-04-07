import styles from "../../style/Nav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useRouter } from 'next/router';
import React, { useState, useContext, MouseEvent, useEffect } from "react";
import { AppContext } from "../../../pages/_app";

const Nav = () => {
  const router = useRouter();
  if (router.pathname === '/about') {
    return null;
  }

  // This is a swtich to use the menu //
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
    // Check if the switch is working
    // console.log("Menu pops up or disapears");
  };
  //**********************************//

  // Using useContext
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  // Each child node, the types must be defined. This is why types are nested.
  const categoryHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    // console.log("Button clicked!", (event.target as HTMLButtonElement).innerHTML);
    const newCategory = (event.target as HTMLButtonElement).innerHTML.toLowerCase()
    // Setting the new category. Selected category page will be shown on the app
    setSelectedCategory({
      country: "us",
      category: newCategory,
    });
  };


  return (
    <div className={styles.body}>
      <MenuIcon data-testid="menu-icon" style={{ cursor: 'pointer' }} className={styles.menu} onClick={toggleSwitch}/>
      <div className={styles.icon__and__message}>
        <h1 className={styles.icon}>NextNews</h1>
        <span className={styles.botto__icon__message}>My News +</span>
      </div>
      <div className={styles.category__1}>
        <ul className={styles.category}>
          {/* <li><button onClick={categoryHandler} className={styles.list}>Tech</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Anime</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Japan</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Game</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Nintendo</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Coding</button></li> */}
        </ul>
        <p><a className={styles.attribute} href="/about">About</a></p>
      </div>
      <div data-testid="category-list" className={`${styles.category__2} ${isSwitchOn ? styles.category__2__show : styles.category__2}`}>
        <ArrowBackIcon data-testid="back-arrow-icon" style={{ cursor: 'pointer' }} className={styles.menu__2} onClick={toggleSwitch}/>
        <ul className={styles.category__2__ul}>
          {/* <li><button onClick={categoryHandler} className={styles.list__2}>Tech</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Anime</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Japan</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Game</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Nintendo</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Coding</button></li> */}
          <p><a className={styles.attribute__smaller__screen} href="/about">About</a></p>
        </ul>
      </div>
    </div>
  )
}

export default Nav
