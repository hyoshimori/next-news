import React, { createContext, useState } from "react";
import styles from "./Base.module.css";
import NewsTimeLine from "./components/NewsTimeLine";
import "normalize.css";

const Base = () => {
  return (
    <div className={styles.body}>
      <NewsTimeLine />
    </div>
  );
};

export default Base;
