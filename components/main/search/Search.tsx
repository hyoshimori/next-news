import { useState, useEffect, useContext } from "react";

import { TextField } from "@mui/material";

import { useNews } from "@/hooks/UseNews";
import { LoadingSpinner, SearchStyles } from "@/components/index";
import { AutoCompleteItemType, News } from "@/types/index";
import {
  generateRandomPasswordUtility,
  handleNavigationUtility,
  removeDuplicatesUtility,
  sleepUtility,
} from "@/utility/index";

import { ViewContext } from "@/pages/_app";

const Search = () => {

  const context = useContext(ViewContext);

  // Avoid error when context is null
  if (!context) {
    return (
      <></>
    )
  };

  const { searchValues } = context;

  const { articleValues } = context;
  const [input, setInput] = useState<string | undefined>(undefined);
  const [autoComplete, setAutoComplete] = useState<AutoCompleteItemType[]>([]);
  const [, setErrorChecker] = useState(false);
  const [isBlurred, setIsBlurred] = useState<string | undefined>("");
  const [isFocused, setIsFocused] = useState(true);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<News[]>([]);

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
    await sleepUtility(150);
    setInput("");
    setIsFocused(true);
    setSwitchOn(!isSwitchOn);
  };

  const focusDetector = () => {
    setIsFocused(false);
    setSwitchOn(!isSwitchOn);
  };

  // Api call run when the page is rendered
  useEffect(() => {
    axios
      .get(searchValues.apiUrl, { timeout: 10000 })
      .then((res) => {
        const uniqueNews = removeDuplicatesUtility(res.data, "url");
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
      setAutoComplete(newArr);
      // When the input filed is empty
    } else if (input === "") {
      setAutoComplete([]);
    }
  }, [input]);
  return (
    <div className={SearchStyles.body}>
      <TextField
        className={SearchStyles.text_field}
        type={searchValues.textFieldType}
        size="small"
        color="success"
        placeholder={
          isBlurred?.length !== 0 ? `${isBlurred}` : `${searchValues.placeholderText}`
        }
        onChange={(e) => setInput(e.target.value)}
        value={input || ""}
        onFocus={() => focusDetector()}
        onBlur={() => blurringDetector()}
      />
      <div className={SearchStyles.autocomplete_section}>
        {loading && !isFocused ? (
          <>
            <LoadingSpinner />
            <p>
              {searchValues.loadingText1}{" "}
              <a target="_blank" href={searchValues.loadingLink}>
                {searchValues.loadingLinkText}
              </a>{" "}
            </p>
            <p>
              {searchValues.loadingLinkTextJP}
              <a target="_blank" href={searchValues.loadingLink}>
                {searchValues.loadingLinkText}
              </a>
            </p>
          </>
        ) : (
          <div></div>
        )}
        {autoComplete.map((el) => {
          return (
            <p
              key={generateRandomPasswordUtility()}
              className={SearchStyles.autocomplete_title}
              onClick={() => { }}>
              {el.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
