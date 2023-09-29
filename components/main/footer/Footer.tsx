import styles from "../../style/Footer.module.css";
import React from "react";

const Footer = () => {
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
