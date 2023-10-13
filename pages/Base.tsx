import React, { useContext } from "react";
import NewsTimeLine from "@/pages/components/main/timeline/NewsTimeLine";
import "normalize.css";

import { ViewContext } from "./_app";

const Base = () => {
  const contextValue = useContext(ViewContext);
  return (
    <div>
      <NewsTimeLine />
    </div>
  );
};

export default Base;
