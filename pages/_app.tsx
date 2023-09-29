import "@/styles/global.css";
import { Category } from "@/types/typeFiles/Category";
import { createContext, useState } from "react";
import { MyContext } from "@/types/typeFiles/MyContext";
import Layout from "@/layouts/NavLayout";
import styles from "@/styles/Home.module.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Using useState to pass data via useContext

  return (
    <div className={styles.body}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
