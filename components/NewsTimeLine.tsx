import styles from "./NewsTimeLine.module.css"
import React, { useEffect, useState } from 'react';
import { useNews } from '@/hooks/UseNews';

const NewsTimeLine = () => {
  const { axios } = useNews();
  const [news, setNews] = useState([]);

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
    <div>News time line</div>
  </div>
  )
}

export default NewsTimeLine
