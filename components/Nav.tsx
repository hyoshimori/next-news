import styles from "./Nav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React, { useState, useContext, MouseEvent, useEffect } from "react";
import { AppContext } from "../pages/_app";

const Nav = () => {
  // This is a swtich to use the menu //
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
    // Check if the switch is working
    // console.log("Menu pops up or disapears");
  };
  //**********************************//

  // Check if the state is correctly updated //
  const value = useContext(AppContext);
  // console.log(value)
  // *************************************** //

  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  // Check if the data is correctly updated//
  // useEffect(() => {
  //   console.log('UseEffect', selectedCategory);
  // }, [selectedCategory]);


  const categoryHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    // console.log("Button clicked!", (event.target as HTMLButtonElement).innerHTML);
    const newCategory = (event.target as HTMLButtonElement).innerHTML.toLowerCase()
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
        <span className={styles.botto__icon__message}>Geek News +</span>
      </div>
      <div className={styles.category__1}>
        <ul className={styles.category}>
          <li><button onClick={categoryHandler} className={styles.list}>US</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Japan</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Tech</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Anime</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Game</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Nintendo</button></li>
          <li><button onClick={categoryHandler} className={styles.list}>Coding</button></li>
        </ul>
      </div>
      <div data-testid="category-list" className={`${styles.category__2} ${isSwitchOn ? styles.category__2__show : styles.category__2}`}>
        <ArrowBackIcon data-testid="back-arrow-icon" style={{ cursor: 'pointer' }} className={styles.menu__2} onClick={toggleSwitch}/>
        <ul className={styles.category__2__ul}>
          <li><button onClick={categoryHandler} className={styles.list__2}>US</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Japan</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Tech</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Anime</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Game</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Nintendo</button></li>
          <li><button onClick={categoryHandler} className={styles.list__2}>Coding</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
