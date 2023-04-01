import styles from './Search.module.css';
import { TextField } from "@mui/material";
import { useState, useEffect } from 'react';

import { useNews } from '@/hooks/UseNews';
import { useContext } from "react";
import { AppContext } from "../pages/_app";

import * as NewsType from "@/types/News";

const Search = () => {

  // useState for input, autocomplete, news, loading and error checker //
  const [input, setInput] = useState<string | undefined>(undefined);
  const [autoComplete, setAutoComplete] = useState<string[]>([]); // Updated the type of autoComplete state variable

  const [news, setNews] = useState<NewsType.News[]>();
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);
  //**********************************************//

  const { axios } = useNews();
  // Accessing to UseContext
  const { selectedCategory } = useContext(AppContext);


  // This is a swtich which manipulates the focus on the inputfield //
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };
  //****************************************************************//



  // API call only once when the page is loaded
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


  // UseEffect for search function
  useEffect(() => {
    console.log(news);
    if (news && input) {
      const newArr = news
        .filter((el) => {
          return el.title.toLowerCase().includes(input.toLowerCase());
        })
        .map((el) => el.title);
      console.log(newArr);
      setAutoComplete(newArr);
    } else if(input === ''){
      setAutoComplete([]);
      console.log(news)
    }
    console.log(input);
  }, [input]); // Added 'news' to the dependency array


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
          onBlur={() => toggleSwitch()}
          onFocus={() => toggleSwitch()}
      />
      <div className={`${isSwitchOn ? styles.autocomplete__section : styles.autocomplete__section__show}`}>
        {autoComplete.map((el) => {
          return(
              <a key={el} href="#">
                <p className={styles.autocomplete__title}>{el}</p>
              </a>
            )
          })
        }
      </div>
    </div>
  );
};

export default Search;
