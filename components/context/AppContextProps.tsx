import React, { createContext, useContext, ReactNode } from "react";
import { ArticleContext } from "../../types/typeFiles/ArticleContext";

const AppContext = createContext<ArticleContext | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const articleContext = {
    FooterValues: {
      aboutLinkText: "About",
      aboutLinkHref: "/about",
      aboutLinkClass: "styles.attribute",
      nextNewsText: "NextNews.",
      dataByText: "| Data by",
      nytApiLinkText: "New York Times API",
      nytApiLinkHref: "https://developer.nytimes.com/apis",
      nytApiLinkClass: "styles.attribute",
      nytApiLinkTarget: "_blank",
    },
    NavValues: {
      aboutLinkText: "About",
      aboutLinkHref: "/about",
      iconMessage: "My News +",
      mainHeading: "NextNews",
      menuIconTestId: "menu-icon",
      backArrowIconTestId: "back-arrow-icon",
      categoryListTestId: "category-list",
    },
    TrendingValues: {
      trendingText: "Trending",
      trendingColor: "#FEC005",
    },
    ProgressValues: {
      progressMax: "100",
      progressText: "100%",
    },
    SearchValues: {
      apiUrl: "https://ny-news-data-test.onrender.com/results",
      timeout: 10000,
      textFieldType: "text",
      textFieldSize: "small",
      textFieldColor: "success",
      placeholderText: "Input Keywords",
      loadingText1:
        "The free tier services of render.com spin down after a period of inactivity, and the first request after that may take a while.",
      loadingText2: "Please have a look at the",
      loadingLink: "https://render.com/docs/free",
      loadingLinkText: "Link",
      loadingTextJP1:
        "Render.comの無料サービスを利用しているため、しばらく操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、1分ほど待ってからページを再リロードしてください。詳しくは以下",
      loadingLinkJP: "https://render.com/docs/free",
      loadingLinkTextJP: "リンク",
      sleepTime: 150,
    },
    ArticleValues: {
      loadingText:
        "The free tier services of render.com spin down after a period of inactivity, and the first request after that may take a while.",
      renderDocLink: "https://render.com/docs/free",
      linkText: "Link",
      forMoreInformationText: "for more information.",
      pleaseWaitAndReloadText: "Please have a look at the",
      loadingTextJP:
        "Render.comの無料サービスを利用しているため、しばらく操作がないとスピンダウンします。その後の最初のリクエストに時間がかかることがあります。ご利用の際は、15秒ほど待ってからページを再リロードしてください。詳しくは以下リンクをご確認ください。",
      defaultImage:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      apiUrl: "https://ny-news-data-test.onrender.com/results",
    },
  };

  return (
    <AppContext.Provider value={articleContext}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
