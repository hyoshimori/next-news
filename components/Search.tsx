import styles from './Search.module.css';
import { TextField } from "@mui/material";
import { useState, useEffect } from 'react';

import { useNews } from '@/hooks/UseNews';
import { useContext } from "react";
import { AppContext } from "../pages/_app";

import * as NewsType from "@/types/News";
import * as AutoCompleteItemType from "@/types/AutoCompleteItem";

interface NewsItemCheck {
  source: {
    name: string;
  };
  id: string;
  name: string;
  title: string;
  byline: string;
  abstract: string;
  url: string;
  section: string;
  published_date: string;
  media?: {
    length: number;
    'media-metadata': { url: string, format: string, height: number, width: number }[];
  }[];
}


// A password creating func
const generateRandomPassword = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:,.<>?/';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// ms stands for milliseconds
// setTimeout() set a timer which will excute the resolve in n secound later (returns promise object).
async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// ********** This is used to remove the duplicates in the arr ********** //
// first data as an argument looks like this: {uri: 'nyt://article/1f3a4fbd-9514-5xxxxxxxxxxxxxxxxxxxx', url: 'https://www.nytimes.com/2023/03/31/us/xxxxxxxxxxxxxxxxxxxx', id: 1000xxxxxxxxxx, asset_id: 10000xxxxxxxxxx, source: 'New York Times', …}
// second argument "key" is the url wich looks like this: https://www.nytimes.com/2023/03/31/arts/telxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const removeDuplicates = (data: NewsItemCheck[], key: keyof NewsItemCheck): NewsItemCheck[] => {
  // ↓ Pick up only the truthy el
  return data.filter((item, index, self) => {
    // ↓ Check if the index of the current el in the loop is the same as the index of the first occurrence of a similar element (based on the key)
    return index === self.findIndex((otherItem) =>
      // OhterItems looks like this: {uri: 'nyt://article/1f3a4fbd-9514-5xxxxxxxxxxxxxxxxxxxx', url: 'https://www.nytimes.com/2023/03/31/us/xxxxxxxxxxxxxxxxxxxx', id: 1000xxxxxxxxxx, asset_id: 10000xxxxxxxxxx, source: 'New York Times', …}
      // OtherItems[key] looks like this: https://www.nytimes.com/2023/03/31/arts/telxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      otherItem[key] === item[key]
    );
  });
};
// ********************************************************************** //


const Search = () => {
  const [input, setInput] = useState<string | undefined>(undefined);
  const [autoComplete, setAutoComplete] = useState<AutoCompleteItemType.AutoCompleteItem[]>([]);
  const [news, setNews] = useState<NewsType.News[]>();
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);
  const [isBlurred, setIsBlurred] = useState<string | undefined>('');

  const { axios } = useNews();
  const checker: any = []


  // First useEffect to get api call
  useEffect(() => {
    axios
    .get("https://ny-news-data-test.onrender.com/results", { timeout: 10000 })
    .then(res => {
      const uniqueNews = removeDuplicates(res.data, "url");
      setNews(uniqueNews);
      setLoading(false);
    })
    .catch(error => {
      console.log("Error message:", error.message);
      setErrorChecker(true);
    });
  }, []);

  // This useEffect is triggered when there is any change in the input field
  useEffect(() => {
    if (news && input) {
      const newArr = news
      .filter((el) => {
        return el.abstract.toLowerCase().includes(input.toLowerCase());
      })
      .map((el) => ({ title: el.title, url: el.url }));
      newArr.map((el) => {
      })
      setAutoComplete(newArr);
      console.log(newArr)
    } else if (input === '') {
      setAutoComplete([]);
    }
  }, [input]);

  // This func is used to open the link when suggestions are being clicked
  const handleNavigation = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // This func is used to remove the value in the field
  const blurringDetector = async () => {
    // setIsBlurred(input)
    await sleep(150)
    setInput('')
  }

  // const focusDetector = async () => {
  //   await sleep(100)
  //   if(isBlurred){
  //     setInput(isBlurred)
  //   }
  // }

  return (
    <div className={styles.body}>
      <TextField
          className={styles.textfield}
          type="text"
          size="small"
          color="success"
          placeholder={isBlurred?.length !== 0? `${isBlurred}` : `Input Keywords`}
          onChange={(e) => setInput(e.target.value)}
          value={input || ''}
          // onFocus={() => focusDetector()}
          onBlur={() => blurringDetector()}
      />
      <div className={styles.autocomplete__section}>
        {autoComplete.map((el) => {
          return (
            <p
              key={generateRandomPassword()}
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
