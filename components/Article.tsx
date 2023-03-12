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
    // making mockup json server api call
    axios.get(ENDPOINT_URL)
    // ↓ production api link would be this
    // axios.get('')
      .then(response => {
        // ↓ Use this for the api call
        // console.log(response.data.articles);
        setNews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.body} data-testid="article__component">
      <div>
        <div className={styles.news__top__wrapper}>
          {news.filter((el, index) => index === 0).map((el, index) =>
            <div key={el.url} className={styles.news__top}>
              <p>{el.url}: {index}</p>
            </div>
          )}
          {news.filter((el, index) => index >= 1 && index <= 5).map((el, index) =>
            <div key={el.url} className={styles.news__top}>
              <p>{el.url}: {index + 1}</p>
            </div>
          )}
        </div>
        {news.filter((el, index) => index > 5).map((el, index) =>
          <div key={el.url} className={styles.news}>
            <span>{el.url}</span>
            <p>{index + 6}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Article
