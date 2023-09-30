import React, { useContext, useEffect, useState } from "react";

import { Progress, ArticleStyles, Trending } from "@/components/index";
import { removeDuplicatesUtility } from "@/utility/index";
import { useNews } from "@/hooks/UseNews";
import { ViewContext } from "@/pages/index";
import * as NewsType from "@/types/typeFiles/News";

// interface ViewContextProps {
//   articleValues: ArticleValues;
//   // Other properties of the context can be added here if there are any
// }
// import type from "@/types/typeFiles/News";

const Article = () => {
  // const { articleValues } = useContext(ViewContext);

  const { axios } = useNews();

  // const [news, setNews] = useState<NewsType.News>();
  const [news, setNews] = useState<NewsType.News[]>();
  // This is for "Loading" message
  const [loading, setLoading] = useState(true);
  const [errorChecker, setErrorChecker] = useState(false);

  useEffect(() => {
    axios
      .get("https://ny-news-data-test.onrender.com/results", { timeout: 10000 })
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

  return (
    <div className={ArticleStyles.body} data-test-id="article_component">
      {loading ? (
        <div className={ArticleStyles.loading}>
          {!errorChecker && (
            <>
              <Progress />
              <div className={ArticleStyles.loading_text}>
                <p>
                  The free tier services of render.com spin down after a period
                  of inactivity, and the first request after that may take a
                  while. Please have a look at the{" "}
                  <a target="_blank" href="https://render.com/docs/free">
                    Link
                  </a>{" "}
                  for more information.{" "}
                </p>
                <p>
                  Render.comの無料サービスを利用しているため、しばらく操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、15秒ほど待ってからページを再リロードしてください。詳しくは以下
                  <a target="_blank" href="https://render.com/docs/free">
                    リンク
                  </a>
                  をご確認ください。
                </p>
              </div>
            </>
          )}
          {errorChecker ? (
            <div className={ArticleStyles.loading_text_second}>
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
                Render.comの無料サービスを利用しているため、しばらく操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、15秒ほど待ってからページを再リロードしてください。詳しくは以下
                <a target="_blank" href="https://render.com/docs/free">
                  リンク
                </a>
                をご確認ください。
              </p>
            </div>
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
                          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                        <img
                          src={
                            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                          }
                          alt=""
                        />
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
