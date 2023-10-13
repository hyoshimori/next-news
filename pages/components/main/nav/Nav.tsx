import React, { useState } from "react";
import { useRouter } from "next/router";

import Link from 'next/link';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";

import { NavStyles } from "@/pages/components/index";

const Nav = () => {
  const router = useRouter();

  // Always call hooks at the top level, before any conditionals.
  const [isSwitchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(prevSwitch => !prevSwitch);
  };

  if (router.pathname === "/about") {
    return null;
  }

  return (
    <div className={NavStyles.body}>
      <MenuIcon
        data-testid="menu-icon"
        style={{ cursor: "pointer" }}
        className={NavStyles.menu}
        onClick={toggleSwitch}
      />
      <div className={NavStyles.icon_and_message}>
        <Link href="/">
          <h1 className={NavStyles.icon}>NextNews</h1>
        </Link>
        <span className={NavStyles.botton_icon_message}>My News +</span>
      </div>
      <div className={NavStyles.category_1}>
        <ul className={NavStyles.category}></ul>
        <p>
          <Link className={NavStyles?.attribute} href="/about">
            About
          </Link>
        </p>
      </div>
      <div
        data-testid="category-list"
        className={`${NavStyles.category_2} ${isSwitchOn ? NavStyles.category_2_show : NavStyles.category_2
          }`}>
        <ArrowBackIcon
          data-testid="back-arrow-icon"
          style={{ cursor: "pointer" }}
          className={NavStyles.menu_2}
          onClick={toggleSwitch}
        />
        <ul className={NavStyles.category_2_ul}>
          <p>
            <Link className={NavStyles?.attribute_smaller_screen} href="/about">
              About
            </Link>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
