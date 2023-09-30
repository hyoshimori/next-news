import React, { useState } from "react";
import { useRouter } from "next/router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";

import { NavStyles } from "@/components/index";

const Nav = () => {
  const router = useRouter();
  if (router.pathname === "/about") {
    return null;
  }

  // This is a swtich to use the menu
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  return (
    <div className={NavStyles.body}>
      <MenuIcon
        data-testid="menu-icon"
        style={{ cursor: "pointer" }}
        className={NavStyles.menu}
        onClick={toggleSwitch}
      />
      <div className={NavStyles.icon_and_message}>
        <h1 className={NavStyles.icon}>NextNews</h1>
        <span className={NavStyles.botton_icon_message}>My News +</span>
      </div>
      <div className={NavStyles.category_1}>
        <ul className={NavStyles.category}></ul>
        <p>
          <a className={NavStyles.attribute} href="/about">
            About
          </a>
        </p>
      </div>
      <div
        data-testid="category-list"
        className={`${NavStyles.category_2} ${
          isSwitchOn ? NavStyles.category_2_show : NavStyles.category_2
        }`}>
        <ArrowBackIcon
          data-testid="back-arrow-icon"
          style={{ cursor: "pointer" }}
          className={NavStyles.menu_2}
          onClick={toggleSwitch}
        />
        <ul className={NavStyles.category_2_ul}>
          <p>
            <a className={NavStyles.attribute_smaller_screen} href="/about">
              About
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
