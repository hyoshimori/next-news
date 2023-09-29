import React, { createContext, useState, useContext } from "react";
import NewsTimeLine from "../components/main/timeline/NewsTimeLine";
import "normalize.css";

import { ViewContext } from "./index"; // Replace with actual path

const Base = () => {
  const contextValue = useContext(ViewContext);

  console.log(contextValue);

  return (
    <div>
      <NewsTimeLine />
    </div>
  );
};

export default Base;
