import React, { createContext, useState } from "react";
import styles from "./Base.module.css";
import NewsTimeLine from "./components/NewsTimeLine";

// import * as NewsType from "@/types/News";
import { Category } from "@/types/Category";
import { MyContext } from "@/types/MyContext";

import "normalize.css";

// AppContext is the context object which provides and consumes the data in components.
export const AppContext = createContext<MyContext>({
  selectedCategory: {
    country: "us",
    category: "anime",
  },
  setSelectedCategory: () => {},
});

const Base = () => {
  // const newsData: NewsType.News[] = [ /*...*/ ];
  const [selectedCategory, setSelectedCategory] = useState<Category["MyContext"]>({
    country: "us",
    category: "anime",
  });

  return (
    <div className={styles.body}>
      <AppContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <NewsTimeLine />
      </AppContext.Provider>
    </div>
  );
};

export default Base;
