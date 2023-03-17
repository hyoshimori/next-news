import styles from "./NewsTimeLine.module.css"
import React from 'react';
import Article from "./Article";
import Footer from "./Footer";

const NewsTimeLine = () => {
  return (
  <div className={styles.body}>
    <Article />
    <Footer />
  </div>
  )
}

export default NewsTimeLine
