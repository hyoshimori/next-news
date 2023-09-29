import styles from "../../style/Search.module.css";

import { TextField } from "@mui/material";

import { useState, useEffect } from "react";
import SearchLoading from "./SearchLoading";

import { useNews } from "@/hooks/UseNews";

// import { arrSort } from "@/utility/newsArrSort"; => WIP
import { generateRandomPassword } from "@/utility/newsGenerateRandomPassword";
import { handleNavigation } from "@/utility/newsHandleNavigation";
import { removeDuplicates } from "@/utility/newsUtils";
import { sleep } from "@/utility/newsSleep";

import * as AutoCompleteItemType from "@/types/AutoCompleteItem";
import * as NewsType from "@/types/News";

const Search = () => {
  const [input, setInput] = useState<string | undefined>(undefined);
  const [autoComplete, setAutoComplete] = useState<
    AutoCompleteItemType.AutoCompleteItem[]
  >([]);
  const [errorChecker, setErrorChecker] = useState(false);
  const [isBlurred, setIsBlurred] = useState<string | undefined>("");
  const [isForcused, setIsisForcused] = useState(true);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsType.News[]>();

  const { axios } = useNews();
  const checker: any = [];

  // This is a switch to use the menu
  const [isSwitchOn, setSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  // This func is used to remove the value in the field
  const blurringDetector = async () => {
    // setIsBlurred(input)
    await sleep(150);
    setInput("");
    setIsisForcused(true);
    setSwitchOn(!isSwitchOn);
  };

  const focusDetector = () => {
    setIsisForcused(false);
    setSwitchOn(!isSwitchOn);
  };

  // Api call run when the page is rendered
  useEffect(() => {
    axios
      .get("https://ny-news-data-test.onrender.com/results", { timeout: 10000 })
      .then((res) => {
        const uniqueNews = removeDuplicates(res.data, "url");
        setNews(uniqueNews);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error message:", error.message);
        setErrorChecker(true);
      });
  }, []);

  // This useEffect is triggered when there is any change in the input field
  useEffect(() => {
    if (news && input) {
      const newArr = news
        .filter((el) => {
          // fetch only the tiles which can be found in the news state
          // el.title.toLowerCase() looks like this: "our new promethean moment", "americans head to europe for the good life on the cheap" ......
          return el.title.toLowerCase().includes(input.toLowerCase());
        })
        .map((el) => ({ title: el.title, url: el.url }));
      console.log(newArr);
      setAutoComplete(newArr);
      // When the input filed is empty
    } else if (input === "") {
      setAutoComplete([]);
    }
  }, [input]);
  return (
    <div className={styles.body}>
      <TextField
        className={styles.text_field}
        type="text"
        size="small"
        color="success"
        placeholder={
          isBlurred?.length !== 0 ? `${isBlurred}` : `Input Keywords`
        }
        onChange={(e) => setInput(e.target.value)}
        value={input || ""}
        onFocus={() => focusDetector()}
        onBlur={() => blurringDetector()}
      />
      <div className={styles.autocomplete_section}>
        {loading && !isForcused ? (
          <>
            <SearchLoading />
            <p>
              The free tier services of render.com spin down after a period of
              inactivity, and the first request after that may take a while.
              Please have a look at the{" "}
              <a target="_blank" href="https://render.com/docs/free">
                Link
              </a>{" "}
              for more information.
            </p>
            <p>
              Render.comの無料サービスを利用しているため、しばらく操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、1分ほど待ってからページを再リロードしてください。詳しくは以下
              <a target="_blank" href="https://render.com/docs/free">
                リンク
              </a>
              をご確認ください。
            </p>
          </>
        ) : (
          <div></div>
        )}
        {autoComplete.map((el) => {
          return (
            <p
              key={generateRandomPassword()}
              className={styles.autocomplete_title}
              onClick={() => handleNavigation(el.url)}>
              {el.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
