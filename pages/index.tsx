import React, { ReactNode } from "react";
import Base from "./Base";
import Head from "next/head";
import ArticleView from "@/store/ArticleView";

import { ArticleType } from "@/types/index";

export const ViewContext = React.createContext<ArticleType | null>(null);
interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  return (
    <ViewContext.Provider value={ArticleView.articleProps}>
      {children}
    </ViewContext.Provider>
  );
};

export default function Home() {
  const title = ArticleView.articleProps.homeValues.homeTitle;
  return (
    <ViewProvider>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Base />
      </main>
    </ViewProvider>
  );
}
