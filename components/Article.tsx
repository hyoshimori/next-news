import styles from "./Article.module.css"
import React, { useEffect, useState } from 'react';

import { useContext } from "react";
import { AppContext } from "../pages/_app";

// ↓ Not in use
// import { getCategoryNews } from '@/hooks/jsonApi';

import { useNews } from '@/hooks/UseNews';
import * as NewsType from "@/types/News";

type Props = {
  news: NewsType.News[];
}

const Article = () => {
  const { axios } = useNews();

  // Accessing to UseContext
  const { selectedCategory } = useContext(AppContext);
  const [news, setNews] = useState<NewsType.News>({ articles: [] });


  // // Get date, "today" and "from 20 days ago" //
  // const date = new Date
  // let currentDate = new Date();
  // let date20DaysAgo = new Date();
  // date20DaysAgo.setDate(currentDate.getDate() - 20);
  // // ************************* //


  // // return value must be string by "): string"
  // const convertDateFormat = (dateString : string): string => {
  //   const date = new Date(dateString);
  //   // extracts the year
  //   const year = date.getFullYear();
  //   // extracts the month
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // };


  useEffect(() => {
    // New variable in order for the page to know which category is being rendered
    const category = selectedCategory.category
    // ********** These are for the real api key ********** //
    // Use convertDateFormat function to make "from" and  "to" date

    // const dateString = date.toString();
    // const dateString20Ago = date20DaysAgo.toString()
    // const from = convertDateFormat(dateString);
    // const to = convertDateFormat(dateString20Ago);


    // const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    // const ENDPOINT_URL = `https://newsapi.org/v2/everything?q=${category}&from=${from}&to=${to}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
    // console.log(ENDPOINT_URL)
    // axios.get(ENDPOINT_URL)
    // ********** These are for the real api key ********** //


    // const apiBaseUrl = process.env.NODE_ENV === 'development'
    // process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOYED;
  // ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
  // : process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOYED;

    // axios.get(`${apiBaseUrl}/${category}`)
    //   .then(response => {
    //     console.log(response);
    //     setNews(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    // }, [selectedCategory]);

    // API call from render.com
    axios.get(`https://news-data-base.onrender.com/${category}`)
      .then(response => {
        // Data is being stored to the state which be shown in a loop in the return section
        setNews(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedCategory]);

  return (
    <div className={styles.body} data-testid="article__component">
      <div>
      <p style={{ fontWeight: "bold", marginBottom: "20px", marginTop: "8px" }}>Trending</p>
        <div className={styles.news__top__wrapper}>
          {news && news.articles && news.articles.filter((el, index: number) => index === 0).map((el, index: number) =>
          <a href={el.url} key={el.url} target="_blank">
            <div key={el.url} className={styles.news__top__first}>
              <img src={el.urlToImage} alt="" />
              <div className={styles.news__top__first__bottom}>
                <span className={styles.news__top__first__bottom__source__name}>{el.source.name}</span>
                <span className={styles.news__top__first__bottom__title}>{el.title}</span>
                <span className={styles.news__top__first__bottom__author}>{el.author}</span>
              </div>
            </div>
          </a>
          )}
          <div className={styles.news__top__wrapper__for__five__articles}>
            {news && news.articles && news.articles.filter((el, index: number) => index >= 1 && index <= 5).map((el, index: number) =>
            <a href={el.url} key={el.url} target="_blank">
              <div key={el.url} className={styles.news__top__right}>
                <span className={styles.news__top__source__name}>{el.source.name}</span>
                <span className={styles.news__top__title}>{el.title}</span>
                <span className={styles.news__top__author}>{el.author}</span>
              </div>
            </a>
            )}
          </div>
        </div>
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>The Latest</p>
        <div className={styles.news__Latest__container}>
          {news && news.articles && news.articles.filter((el, index: number) => index > 5 && index <= 30).map((el, index: number) =>
          <a href={el.url} key={el.url} target="_blank">
            <div className={styles.news__Latest}>
              <div key={el.url} className={styles.news__Latest__name__titile__author}>
                <span className={styles.news__latest__source__name}>{el.source.name}</span>
                <span className={styles.news__latest__title}>{el.title}</span>
                <span className={styles.news__latest__author}>{el.author}</span>
                <span className={styles.news__latest__published__At}>{el.publishedAt}</span>
              </div>
              <p className={styles.news__latest__description}>{el.description}</p>
              <img src={el.urlToImage} alt="" />
            </div>
          </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Article
