import React, { useContext } from "react";
import NewsTimeLine from "@/components/main/timeline/NewsTimeLine";
import "normalize.css";

import { ViewContext } from "./index";

const Base = () => {
  const contextValue = useContext(ViewContext);
  return (
    <div>
      <NewsTimeLine />
    </div>
  );
};

export default Base;
