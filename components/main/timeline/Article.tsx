import React, { useContext, useEffect, useState } from "react";

import { ArticleStyles, LoadingSpinner, Trending } from "@/components/index";
import { removeDuplicatesUtility } from "@/utility/index";
import { useNews } from "@/hooks/UseNews";
import { ViewContext } from "@/pages/index";
import * as NewsType from "@/types/index";
import type { ArticleType } from "@/types/index";

interface ViewContextProps {
  articleValues: ArticleType["articleValues"];
}

const Article = () => {
  const context = useContext(ViewContext);

  // Avoid error when context is null
  if (!context) {
    return (
      <></>
    )
  };

  const { articleValues } = context;
  const { axios } = useNews();
  // const [news, setNews] = useState<NewsType.News>();
  const [news, setNews] = useState<NewsType.News[]>();
  // This is for "Loading" message
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);

  useEffect(() => {
    let elapsed = 0;

    // Reload page after 15 seconds
    const intervalId = setInterval(() => {
      elapsed += 1000;
      if (elapsed >= 15000) {
        console.log('Reloading due to timeout');
        window.location.reload();
      }
    }, 1000);

    axios
      .get(articleValues.apiUrl, { timeout: 10000 })
      .then((res) => {
        clearInterval(intervalId); // Clear the interval on successful request
        const uniqueNews = removeDuplicatesUtility(res.data, "url");
        setNews(uniqueNews);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error message:", error.message);
        setErrorChecker(true);
      });

    // Optionally clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  const LoadingText = () => {
    return (
      <div className={ArticleStyles.loading_text}>
        <p>
          {articleValues.loadingText}{" "}
          <a target="_blank" rel="noopener noreferrer" href={articleValues.renderDocLink}>
            {articleValues.linkText}
          </a>{" "}
          {articleValues.forMoreInformationText}{" "}
        </p>
        <p>
          {articleValues.loadingTextJP}{" "}
          <a target="_blank" rel="noopener noreferrer" href={articleValues.renderDocLink}>
            {articleValues.linkText}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={ArticleStyles.body} data-test-id="article_component">
      {loading ? (
        <div className={ArticleStyles.loading}>
          {!errorChecker && (
            <>
              <LoadingSpinner />
              <LoadingText />
            </>
          )}
          {errorChecker ? (
            <LoadingText />
          ) : null}
        </div>
      ) : (
        <div>
          <div>
            <Trending />
          </div>
          <div className={ArticleStyles.news_top_wrapper}>
            {news &&
              news
                .filter((el, index: number) => index === 0)
                .map((el, index: number) => (
                  <a href={el.url} key={el.url} target="_blank">
                    <div key={el.url} className={ArticleStyles.news_top_first}>
                      <img
                        src={
                          el.media?.[0]?.["media-metadata"]?.[2]?.url ||
                          `${articleValues.defaultImage}`
                        }
                        alt=""
                      />
                      <div className={ArticleStyles.news_top_first_bottom}>
                        <span
                          className={
                            ArticleStyles.news_top_first_bottom_source_name
                          }>
                          {el.section}
                        </span>
                        <span
                          id="post_title"
                          className={ArticleStyles.news_top_first_bottom_title}>
                          {el.title}
                        </span>
                        <span
                          className={
                            ArticleStyles.news_top_first_bottom_author
                          }>
                          {el.abstract}
                        </span>
                        <span
                          className={
                            ArticleStyles.news_top_first_bottom_author
                          }>
                          {el.byline}
                        </span>
                        <span
                          className={
                            ArticleStyles.news_top_first_bottom_author
                          }>
                          {el.published_date}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
            <div className={ArticleStyles.news_top_wrapper_for_five_articles}>
              {news &&
                news &&
                news
                  .filter((el, index: number) => index >= 1 && index <= 5)
                  .map((el, index: number) => (
                    <a href={el.url} key={el.url} target="_blank">
                      <div
                        key={el.url}
                        className={ArticleStyles.news_top_right}>
                        <span className={ArticleStyles.news_top_source_name}>
                          {el.section}
                        </span>
                        <span
                          id="post_title"
                          className={ArticleStyles.news_top_title}>
                          {el.title}
                        </span>
                        <span className={ArticleStyles.news_top_author}>
                          {el.byline}
                        </span>
                      </div>
                    </a>
                  ))}
            </div>
          </div>
          <p style={{ color: "#FEC005", marginBottom: "20px" }}>Latest</p>
          <div className={ArticleStyles.news_latest_container}>
            {news &&
              news &&
              news
                .filter((el, index: number) => index > 5 && index <= 30)
                .map((el, index: number) => (
                  <a href={el.url} key={el.url} target="_blank">
                    <div className={ArticleStyles.news_Latest}>
                      <div
                        key={el.url}
                        className={ArticleStyles.news_Latest_name_title_author}>
                        <span className={ArticleStyles.news_latest_source_name}>
                          {el.section}
                        </span>
                        <span
                          id="post_title"
                          className={ArticleStyles.news_latest_title}>
                          {el.title}
                        </span>
                        <span className={ArticleStyles.news_latest_author}>
                          {el.byline}
                        </span>
                        <span
                          className={ArticleStyles.news_latest_published_at}>
                          {el.published_date}
                        </span>
                      </div>
                      <p className={ArticleStyles.news_latest_description}>
                        {el.abstract}
                      </p>
                      {el.media &&
                        el.media.length > 0 &&
                        el.media[0]["media-metadata"] ? (
                        <img
                          src={el.media?.[0]["media-metadata"]?.[2]?.url}
                          alt=""
                        />
                      ) : (
                        <img src={`${articleValues.defaultImage}`} alt="" />
                      )}
                    </div>
                  </a>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
