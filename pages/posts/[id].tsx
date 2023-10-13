import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { ArticleStyles, ErrorMessage, Footer, LoadDetailStyles, LoadingSpinner } from "@/pages/components/index";
import LoadDetail from "../components/main/timeline/LoadDetail";
import { removeDuplicatesUtility } from "@/pages/utility/index";
import { ViewContext } from "@/pages/_app";
import * as NewsType from "@/pages/types/index";
import type { ArticleType } from "@/pages/types/index";

import { useNews } from "@/pages/hooks/UseNews";
import ShowStyles from "./ShowStyles.module.css";

interface ViewContextProps {
    articleValues: ArticleType["articleValues"];
}


export default function Id() {

    const { axios } = useNews();
    const router = useRouter();

    const context = useContext(ViewContext);

    // Avoid error when context is null
    const { articleValues } = context || {};

    // set useStates
    const [matchedPost, setMatchedPost] = useState<NewsType.News | undefined>(undefined);
    const [news, setNews] = useState<NewsType.News[]>();
    const [serializedNews, setSerializedNews] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorChecker, setErrorChecker] = useState(false);
    const [renderStopper, setRenderStopper] = useState(0);

    // get id from router
    const postId = router.query.id as string;

    useEffect(() => {
        if (router.isReady && router.query.data) {
            setSerializedNews(router.query.data as string);
        }
    }, [router.isReady, router.query.data]);

    useEffect(() => {
        if (serializedNews) {
            const newsData: NewsType.News[] = JSON.parse(decodeURIComponent(serializedNews));
            const foundPost = newsData.find(post => post.id.toString() === postId);
            setMatchedPost(foundPost);
        }
    }, [serializedNews, postId]);

    useEffect(() => {
        if (!matchedPost) {
            let elapsed = 0;
            const intervalId = setInterval(() => {
                elapsed += 1000;
                if (elapsed >= 15000) {
                    console.log('Reloading due to timeout');
                    window.location.reload();
                }
                setRenderStopper(renderStopper + 1);
            }, 10000);

            if (renderStopper >= 5 && !matchedPost) {
                clearInterval(intervalId);
            }

            if (!articleValues) {
                console.error("articleValues is undefined");
                // Handle this case appropriately; maybe return or set an error state.
                return;
            }

            if (renderStopper >= 5 && !matchedPost) { return }
            axios.get(articleValues.apiUrl, { timeout: 10000 })
                .then((res) => {
                    clearInterval(intervalId);
                    const uniqueNews = removeDuplicatesUtility(res.data, "url");
                    const serializedData = encodeURIComponent(JSON.stringify(uniqueNews));
                    setSerializedNews(serializedData);
                    setNews(uniqueNews);
                    setLoading(false);
                    setRenderStopper(renderStopper + 1);
                    console.log("uniqueNews:", uniqueNews);
                })
                .catch((error) => {
                    console.log("Error message:", error.message);
                    setErrorChecker(true);
                });

            return () => clearInterval(intervalId);
        }
    }, [matchedPost, axios]);

    if (loading) {
        return (
            <div className={LoadDetailStyles.body}>
                <div className={LoadDetailStyles.loading}>
                    <LoadingSpinner />
                    <LoadDetail />
                </div>
            </div>
        );
    }

    if (!matchedPost) {
        return <ErrorMessage />;
    }

    return (
        <div className={ShowStyles.base_and_footer}>
            <div className={ShowStyles.base}>
                <div className={ShowStyles.body}>
                    <div className={ShowStyles.upper_body}>
                        <div>
                            <h2 className={ShowStyles.type}>{matchedPost?.section}</h2>
                        </div>
                        <div className={ShowStyles.title_and_photo}>
                            <h2 className={ShowStyles.title}>{matchedPost?.title}</h2>
                            <img className={ShowStyles.image}
                                src={matchedPost?.media?.[0]?.["media-metadata"]?.[2]?.url}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={ShowStyles.lower_body}>
                        <p>{matchedPost?.published_date}</p>
                        <p><strong>{matchedPost?.byline}</strong></p>
                        <p>{matchedPost?.abstract}</p>
                        <a href={matchedPost?.url} target="_blank" className={ShowStyles.link_to_site}>Read more..</a>
                    </div>
                </div>
                <div className={ShowStyles.side_body}>
                    <p className={ShowStyles.side_title}>Recent posts</p>
                    <div className={ShowStyles.side_body_bottom}>
                        {news?.filter((el, index) => index >= 1 && index <= 5)
                            .map((el, index) => (
                                <Link
                                    href={{ pathname: `/posts/${el.id}` }}
                                    key={el.url}
                                >
                                    <div
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
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div >
            {/* <Footer /> */}
        </div>
    );
}
