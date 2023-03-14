import styles from "./Article.module.css"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
          <a href={el.url} key={el.url}>
            <div key={el.url} className={styles.news__top__first}>
              <img src={el.urlToImage} alt="" />
              <div className={styles.news__top__first__bottom}>
                <span className={styles.news__top__first__bottom__source__name}>{el.source.name}</span>
                <span className={styles.news__top__first__bottom__title}>{el.title}</span>
                <span className={styles.news__top__first__bottom__author}>{el.author}</span>              </div>
              </div>
          </a>
          )}
          <div className={styles.news__top__wrapper__for__five__articles}>
            {news.filter((el, index) => index >= 1 && index <= 5).map((el, index) =>
              <div key={el.url} className={styles.news__top__right}>
                <span className={styles.news__top__source__name}>{el.source.name}</span>
                <span className={styles.news__top__title}>{el.title}</span>
                <span className={styles.news__top__author}>{el.author}</span>
              </div>
            )}
          </div>
        </div>
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>The Latest</p>
        {news.filter((el, index) => index > 5 && index <= 30).map((el, index) =>
        <a href={el.url} key={el.url}>
          <div key={el.url} className={styles.news__latest}>
            <div className={styles.news__top__first__bottom}>
              <span className={styles.news__latest__source__name}>{el.source.name}</span>
              <span className={styles.news__latest__title}>{el.title}</span>
              <span className={styles.news__latest__author}>{el.author}</span>
            </div>
            <span className={styles.news__latest__author}>{el.description}</span>
            <img src={el.urlToImage} alt="" />
          </div>
        </a>
        )}
      </div>
    </div>
  )
}

export default Article
