import React, { useContext } from "react";
import { Search, TrendingStyles } from "@/components/index";

import { ViewContext } from "@/pages/index";
import type { ArticleType } from "@/types/index";
interface ViewContextProps {
  articleValues: ArticleType["trendingValues"];
}

const Trending = () => {
  const context = useContext(ViewContext);

  // Avoid error when context is null
  if (!context) {
    return (
      <></>
    )
  };

  const { trendingValues } = context;

  return (
    <div className={TrendingStyles.body}>
      <p style={{ color: `${trendingValues.trendingColor}` }}>{trendingValues.trendingText}</p>
      <Search />
    </div>
  );
};
export default Trending;
