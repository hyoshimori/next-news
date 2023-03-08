import React from 'react'
import styles from "./Base.module.css";
import NewsTimeLine from './components/NewsTimeLine';

const Base = () => {
  return (
    <div className={styles.body}>
      <div>
        Hello from base
      </div>
      <NewsTimeLine />
    </div>
  )
}

export default Base
