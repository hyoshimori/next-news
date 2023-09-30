import React from "react";

import { Article, Footer, NewsTimeLineStyles } from "@/components/index";

const NewsTimeLine = () => {
  return (
    <div className={NewsTimeLineStyles.body}>
      <Article />
      <Footer />
    </div>
  );
};

export default NewsTimeLine;
