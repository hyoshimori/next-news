import React, { ReactNode } from "react";
import Base from "./Base";
import Head from "next/head";
import View from "@/store/View";

import { ArticleContext } from "@/types/typeFiles/ArticleContext";

export const ViewContext = React.createContext<ArticleContext | null>(null);
interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  return (
    <ViewContext.Provider value={View.articleProps}>
      {children}
    </ViewContext.Provider>
  );
};

export default function Home() {
  const title = View.articleProps.homeValues.homeTitle;
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
