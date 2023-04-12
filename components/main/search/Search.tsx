import styles from '../../style/Search.module.css';

import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect } from 'react';
import SearchLoading from "./SearchLoading"

import { useNews } from '@/hooks/UseNews';
import { useContext } from "react";
import { AppContext } from "../../../pages/_app";

import { removeDuplicates } from "@/utility/newsUtils";
import { generateRandomPassword } from "@/utility/newsGenerateRandomPassword";
import { sleep } from "@/utility/newsSleep";
import { handleNavigation } from "@/utility/newsHandleNavigation";
// import { arrSort } from "@/utility/newsArrSort"; => WIP

import * as NewsType from "@/types/News";
import * as AutoCompleteItemType from "@/types/AutoCompleteItem";
import * as NewsItemCheckType from "@/types/NewsItemCheck";

const Search = () => {
  const [input, setInput] = useState<string | undefined>(undefined);
  const [autoComplete, setAutoComplete] = useState<AutoCompleteItemType.AutoCompleteItem[]>([]);
  const [news, setNews] = useState<NewsType.News[]>();
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);
  const [isBlurred, setIsBlurred] = useState<string | undefined>('');
  const [isForcused, setIsisForcused] = useState(true);

  const { axios } = useNews();
  const checker: any = []


  // This is a swtich to use the menu //
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };
  //**********************************//


  // This func is used to remove the value in the field
  const blurringDetector = async () => {
    // setIsBlurred(input)
    await sleep(150)
    setInput('')
    setIsisForcused(true)
    setSwitchOn(!isSwitchOn);
  }

  const focusDetector = () => {
    setIsisForcused(false)
    setSwitchOn(!isSwitchOn);
  }


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
    // When there is news and input in the state
    if (news && input) {
      // const sortedNews = arrSort(news) // wip
      const newArr = news
      .filter((el) => {
        // fetch only the tiles which can be found in the news state
        // el.title.toLowerCase() looks like this: "our new promethean moment", "americans head to europe for the good life on the cheap" ......
        return el.title.toLowerCase().includes(input.toLowerCase());
      })
      .map((el) => ({ title: el.title, url: el.url }));
      console.log(newArr)
      setAutoComplete(newArr);
      // When the input filed is empty
    } else if (input === '') {
      setAutoComplete([]);
    }
  }, [input]);
  return (
    <div className={styles.body}>
      {/* <SearchIcon className={`${styles.search__icon} ${isSwitchOn ? styles.search__icon__show : styles.search__icon}`}/> */}
      <TextField
          className={styles.textfield}
          type="text"
          size="small"
          color="success"
          placeholder={isBlurred?.length !== 0? `${isBlurred}` : `Input Keywords`}
          onChange={(e) => setInput(e.target.value)}
          value={input || ''}
          onFocus={() => focusDetector()}
          onBlur={() => blurringDetector()}
      />
      <div className={styles.autocomplete__section}>
        {loading && !isForcused ?
          <>
            <SearchLoading />
            <p>The free tier services of render.com spin down after a period of inactivity, and the first request after that may take a while. Please have a look at the <a target="_blank" href="https://render.com/docs/free">Link</a> for more information.</p>
            <p>Render.comの無料サービスを利用しているため、しばらく操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、15秒ほど待ってからページを再リロードしてください。詳しくは以下<a target="_blank" href="https://render.com/docs/free">リンク</a>をご確認ください。</p>
          </>
        :
          <div></div>
        }
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
