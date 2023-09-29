import "@/styles/global.css";
import { Category } from "@/types/Category";
import { createContext, useState } from "react";
import { MyContext } from "@/types/MyContext";
import Layout from "@/layouts/NavLayout";
import styles from "@/styles/Home.module.css";
import type { AppProps } from "next/app";

// This interface is to tell typescript the structure of the context. This is why there is a function in it
export const AppContext = createContext<MyContext>({
  selectedCategory: {
    country: "us",
    category: "tech",
  },
  setSelectedCategory: () => {},
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // Using useState to pass data via useContext
  const [selectedCategory, setSelectedCategory] = useState<
    Category["MyContext"]
  >({
    country: "us",
    category: "tech",
  });

  return (
    <div className={styles.body}>
      <AppContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
