import styles from "../../style/Footer.module.css";
import React from "react";

const Footer = () => {
  const FooterValues = {
    aboutLinkText: "About",
    aboutLinkHref: "/about",
    aboutLinkClass: "styles.attribute",
    nextNewsText: "NextNews.",
    dataByText: "| Data by",
    nytApiLinkText: "New York Times API",
    nytApiLinkHref: "https://developer.nytimes.com/apis",
    nytApiLinkClass: "styles.attribute",
    nytApiLinkTarget: "_blank",
  };

  return (
    <div className={styles.body}>
      <span>
        |{" "}
        <a className={styles.attribute} href="/about">
          About
        </a>{" "}
        NextNews.
      </span>
      <span>
        | Data by{" "}
        <a
          className={styles.attribute}
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
