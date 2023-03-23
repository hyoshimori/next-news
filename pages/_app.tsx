import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Layout from '@/layouts/NavLayout';
import styles from '@/styles/Home.module.css';
import { createContext, useState } from 'react';
import { MyContext } from '@/types/MyContext';
import { Category } from '@/types/Category';

export const AppContext = createContext<MyContext>({
  selectedCategory: {
    country: 'us',
    category: 'us',
  },
  setSelectedCategory: () => {},
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category['MyContext']>({
    country: 'us',
    category: 'us',
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
