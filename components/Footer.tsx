import styles from "./Footer.module.css"
import React from 'react';

const Footer = () => {
  return (
  <div className={styles.body}>
    <span><a className={styles.attribute} href="/about">About</a></span>
    <span>News data is provided by <a className={styles.attribute} target="_blank" href="https://newsapi.org/">NewsAPI</a>.</span>
  </div>
  )
}

export default Footer
