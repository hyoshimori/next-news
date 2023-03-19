import React from 'react'
import styles from "./Base.module.css";
import NewsTimeLine from './components/NewsTimeLine';
import { createContext } from 'react';

// import * as NewsType from "@/types/News";
import { Category } from "@/types/Category";

import 'normalize.css';

interface MyContext {
  category: Category;
}

export const MyContext = createContext<MyContext>({
  category: {
    MyContext: {
      country: "us",
      category: "anime"
    }
  }
});


const Base = () => {
  // const newsData: NewsType.News[] = [ /*...*/ ];

  return (
    <div className={styles.body}>
      <NewsTimeLine />
    </div>
  )
}

export default Base
