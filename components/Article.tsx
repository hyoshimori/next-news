import styles from "./Article.module.css"
import React, { useEffect, useState } from 'react';
import Progress from "./Progress";
import Trending from "./Trending";


import { useContext } from "react";
import { AppContext } from "../pages/_app";

// ↓ Not in use
// import { getCategoryNews } from '@/hooks/jsonApi';

import { useNews } from '@/hooks/UseNews';
import * as NewsType from "@/types/News";

// type Props = {
//   news: NewsType.News[];
// }

const Article = () => {
  const { axios } = useNews();

  // Accessing to UseContext
  const { selectedCategory } = useContext(AppContext);
  // const [news, setNews] = useState<NewsType.News>();
  const [news, setNews] = useState<NewsType.News[]>();
  // This is for "Loading" message
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);


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
    // const category = selectedCategory.category
    // ********** These are for the real api key ********** //
    // Use convertDateFormat function to make "from" and  "to" date


    // const dateString = date.toString();
    // const dateString20Ago = date20DaysAgo.toString()
    // const from = convertDateFormat(dateString);
    // const to = convertDateFormat(dateString20Ago);


    // const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    // const ENDPOINT_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${API_KEY}`;
    // console.log(ENDPOINT_URL)
    // axios.get(ENDPOINT_URL)
    // ********** These are for the real api key ********** //


    // const apiBaseUrl = process.env.NODE_ENV === 'development'
    // process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOYED;
  // ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
  // : process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOYED;


  axios.get("https://ny-news-data.onrender.com/results", {timeout: 10000})
    .then(res => {
      setNews(res.data);
      // Displya "Loading while waiting"
      setLoading(false);
    })
    .catch(error => {
      console.log('Error message:', error.messageror);
      setErrorChecker(true);
    });
}, [selectedCategory]);


  return (
    <div className={styles.body} data-testid="article__component">
    {loading ? (
      <div className={styles.loading}>
        {/* {!errorChecker && <div className={styles.loading__first__message}>Loading...</div>} */}
        {!errorChecker && <Progress />}
        {errorChecker ?
          <div className={styles.loading__text}>
            <p>The free tier services of render.com spin down after 15 minutes of inactivity, and the first request after that may take a while. Please have a look at the <a href="https://render.com/docs/free">Link</a> for more information.</p>
            <p>Render.comの無料サービスを利用しているため、15分間操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、ページを再リロードしてください。詳しくは以下<a href="https://render.com/docs/free">リンク</a>をご確認ください。</p>
          </div>
        :
          null
        }
      </div>
    ) : (
      <div>
        <div>
          <Trending />
        </div>
        <div className={styles.news__top__wrapper}>
          {news && news.filter((el, index: number) => index === 0).map((el, index: number) =>
          <a href={el.url} key={el.url} target="_blank">
            <div key={el.url} className={styles.news__top__first}>
            <img src={el.media?.[0]?.['media-metadata']?.[2]?.url || 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} alt="" />
              <div className={styles.news__top__first__bottom}>
                <span className={styles.news__top__first__bottom__source__name}>{el.section}</span>
                <span className={styles.news__top__first__bottom__title}>{el.title}</span>
                <span className={styles.news__top__first__bottom__author}>{el.abstract}</span>
                <span className={styles.news__top__first__bottom__author}>{el.byline}</span>
                <span className={styles.news__top__first__bottom__author}>{el.published_date}</span>
              </div>
            </div>
          </a>
          )}
          <div className={styles.news__top__wrapper__for__five__articles}>
            {news && news && news.filter((el, index: number) => index >= 1 && index <= 5).map((el, index: number) =>
            <a href={el.url} key={el.url} target="_blank">
              <div key={el.url} className={styles.news__top__right}>
                <span className={styles.news__top__source__name}>{el.section}</span>
                <span className={styles.news__top__title}>{el.title}</span>
                <span className={styles.news__top__author}>{el.byline}</span>
              </div>
            </a>
            )}
          </div>
        </div>
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>Latest</p>
        <div className={styles.news__Latest__container}>
          {news && news && news.filter((el, index: number) => index > 5 && index <= 30).map((el, index: number) =>
          <a href={el.url} key={el.url} target="_blank">
            <div className={styles.news__Latest}>
              <div key={el.url} className={styles.news__Latest__name__titile__author}>
                <span className={styles.news__latest__source__name}>{el.section}</span>
                <span className={styles.news__latest__title}>{el.title}</span>
                <span className={styles.news__latest__author}>{el.byline}</span>
                <span className={styles.news__latest__published__At}>{el.published_date}</span>
              </div>
              <p className={styles.news__latest__description}>{el.abstract}</p>
              {el.media && el.media.length > 0 && el.media[0]['media-metadata'] ? (
                <img src={el.media?.[0]['media-metadata']?.[2]?.url} alt="" />
              ) : (
                <img src={'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} alt="" />
              )}
            </div>
          </a>
          )}
        </div>
      </div>
    )}
    </div>
  )
}

export default Article
