import React from 'react'
import styles from "./Base.module.css";
import NewsTimeLine from './components/NewsTimeLine';
// import * as NewsType from "@/types/News";

import 'normalize.css';

const Base = () => {
  // const newsData: NewsType.News[] = [ /*...*/ ];

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
