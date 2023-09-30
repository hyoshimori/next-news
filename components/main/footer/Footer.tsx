import React from "react";

import { FooterStyles } from "@/components/index";

const Footer = () => {
  return (
    <div className={FooterStyles.body}>
      <span>
        |{" "}
        <a className={FooterStyles.attribute} href="/about">
          About
        </a>{" "}
        NextNews.
      </span>
      <span>
        | Data by{" "}
        <a
          className={FooterStyles.attribute}
          target="_blank"
          href="https://developer.nytimes.com/apis">
          New York Times API
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
