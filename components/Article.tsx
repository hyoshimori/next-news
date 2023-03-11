import styles from "./Article.module.css"
import React, { useEffect, useState } from 'react';

import { useNews } from '@/hooks/UseNews';

import * as NewsType from "@/types/News";

type Props = {
  news: NewsType.News[];
}

const Article = () => {

  const { axios } = useNews();
  const [news, setNews] = useState<Props['news']>([]);

  const ENDPOINT_URL = 'http://localhost:4000/articles'

  useEffect(() => {
    console.log('hi');
    // making mockup json server api call
    axios.get(ENDPOINT_URL)
    // ↓ production api link would be this
    // axios.get('')
      .then(response => {
        console.log(response.data);
        // ↓ Use this for the api call
        // console.log(response.data.articles);
        setNews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.body}>
      <div>
        {news.map((el, index) => {
          let component;
          switch (true) {
            case index === 0:
              component = (
                <div key={el.url} className={styles.news__first}>
                  <span>{el.url} (index is 1)</span>
                </div>
              );
              break;
            case index <= 5:
              component = (
                <div key={el.url} className={styles.news__second}>
                  <span>{el.url}</span>
                </div>
              );
              break;
            default:
              component = (
                <div key={el.url} className={styles.news}>
                  <span>{el.url}</span>
                  <p>{index}</p>
                </div>
              );
              break;
          }
          return index <= 5 ? (
            <div className={styles.news__parent}>{component}</div>
          ) : (
            component
          );
        })}
      </div>
    </div>
  )
}

export default Article
