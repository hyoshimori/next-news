import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../style/Nav.module.css";

import { AppContext } from "../../../pages/_app";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";

const Nav = () => {
  const NavValues = {
    aboutLinkText: "About",
    aboutLinkHref: "/about",
    iconMessage: "My News +",
    mainHeading: "NextNews",
    menuIconTestId: "menu-icon",
    backArrowIconTestId: "back-arrow-icon",
    categoryListTestId: "category-list",
  };

  const router = useRouter();
  if (router.pathname === "/about") {
    return null;
  }

  // This is a swtich to use the menu
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  // Using useContext
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  // Each child node, the types must be defined. This is why types are nested.
  const categoryHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    const newCategory = (
      event.target as HTMLButtonElement
    ).innerHTML.toLowerCase();
    // Setting the new category. Selected category page will be shown on the app
    setSelectedCategory({
      country: "us",
      category: newCategory,
    });
  };

  return (
    <div className={styles.body}>
      <MenuIcon
        data-testid="menu-icon"
        style={{ cursor: "pointer" }}
        className={styles.menu}
        onClick={toggleSwitch}
      />
      <div className={styles.icon_and_message}>
        <h1 className={styles.icon}>NextNews</h1>
        <span className={styles.botton_icon_message}>My News +</span>
      </div>
      <div className={styles.category_1}>
        <ul className={styles.category}></ul>
        <p>
          <a className={styles.attribute} href="/about">
            About
          </a>
        </p>
      </div>
      <div
        data-testid="category-list"
        className={`${styles.category_2} ${
          isSwitchOn ? styles.category_2_show : styles.category_2
        }`}>
        <ArrowBackIcon
          data-testid="back-arrow-icon"
          style={{ cursor: "pointer" }}
          className={styles.menu_2}
          onClick={toggleSwitch}
        />
        <ul className={styles.category_2_ul}>
          <p>
            <a className={styles.attribute_smaller_screen} href="/about">
              About
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
