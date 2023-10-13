import React from 'react';

import "@/styles/global.css";
import Layout from "@/pages/layouts/NavLayout";
import styles from "@/styles/Home.module.css";
import type { AppProps } from "next/app";

// Using useState to pass data via useContext

import { ArticleType } from "@/pages/types/index";
import ArticleView from "@/pages/store/ArticleView";


export const ViewContext = React.createContext<ArticleType | null>(null);

type ReactNode = any
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

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ViewProvider>
      <div className={styles.body}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ViewProvider>
  );
}
