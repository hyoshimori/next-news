import styles from "./NewsTimeLine.module.css"
import React, { useEffect, useState } from 'react';
import { useNews } from '@/hooks/UseNews';

import * as NewsType from "@/types/News";

type Props = {
  news: NewsType.News[];
}

const NewsTimeLine = (props: Props) => {
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
      {news.map((el) => {
        console.log(el)
        return(
            <>
              <div>
                <span>{el.url}</span>
              </div>
            </>
          )
        })
      }
    </div>
  </div>
  )
}

export default NewsTimeLine
