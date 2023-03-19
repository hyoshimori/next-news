import React from 'react'
import styles from "./Base.module.css";
import NewsTimeLine from './components/NewsTimeLine';
import { createContext } from 'react';

// import * as NewsType from "@/types/News";

import 'normalize.css';

export const MyContext = createContext('hi')

const Base = () => {
  // const newsData: NewsType.News[] = [ /*...*/ ];

  return (
    <div className={styles.body}>
      <NewsTimeLine />
    </div>
  )
}

export default Base
