import styles from './Search.module.css';
import { TextField } from "@mui/material";
import { useState, useEffect } from 'react';

import { useNews } from '@/hooks/UseNews';
import { useContext } from "react";
import { AppContext } from "../pages/_app";

import * as NewsType from "@/types/News";
import * as AutoCompleteItemType from "@/types/AutoCompleteItem";

const Search = () => {
  const [input, setInput] = useState<string | undefined>(undefined);
  const [autoComplete, setAutoComplete] = useState<AutoCompleteItemType.AutoCompleteItem[]>([]);
  const [news, setNews] = useState<NewsType.News[]>();
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);

  const { axios } = useNews();
  const { selectedCategory } = useContext(AppContext);

  useEffect(() => {
    axios.get("https://ny-news-data.onrender.com/results", {timeout: 10000})
    .then(res => {
      setNews(res.data);
      setLoading(false);
    })
    .catch(error => {
      console.log('Error message:', error.messageror);
      setErrorChecker(true);
    });
  }, [])

  useEffect(() => {
    console.log(news);
    if (news && input) {
      const newArr = news
        .filter((el) => {
          return el.title.toLowerCase().includes(input.toLowerCase());
        })
        .map((el) => ({ title: el.title, url: el.url }));
      console.log(newArr);
      setAutoComplete(newArr);
    } else if(input === ''){
      setAutoComplete([]);
      console.log(news)
    }
    console.log(input);
  }, [input]);

  const handleNavigation = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.body}>
      <TextField
          className={styles.textfield}
          type="text"
          size="small"
          color="success"
          placeholder='Input keywords'
          onChange={(e) => setInput(e.target.value)}
          value={input || ''}
      />
      <div className={styles.autocomplete__section}>
        {autoComplete.map((el) => {
          return (
            <p
              key={el.url}
              className={styles.autocomplete__title}
              onClick={() => handleNavigation(el.url)}
            >
              {el.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
