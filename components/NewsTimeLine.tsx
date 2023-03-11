import styles from "./NewsTimeLine.module.css"
import React from 'react';
import Article from "./Article";

const NewsTimeLine = () => {
  return (
  <div className={styles.body}>
    <Article />
  </div>
  )
}

export default NewsTimeLine
