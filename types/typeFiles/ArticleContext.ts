export interface ArticleContext {
  footerValues: {
    aboutLinkText: string;
    aboutLinkHref: string;
    aboutLinkClass: string;
    nextNewsText: string;
    dataByText: string;
    nytApiLinkText: string;
    nytApiLinkHref: string;
    nytApiLinkClass: string;
    nytApiLinkTarget: string;
  };
  navValues: {
    aboutLinkText: string;
    aboutLinkHref: string;
    iconMessage: string;
    mainHeading: string;
    menuIconTestId: string;
    backArrowIconTestId: string;
    categoryListTestId: string;
  };
  trendingValues: {
    trendingText: string;
    trendingColor: string;
  };
  progressValues: {
    progressMax: string;
    progressText: string;
  };
  searchValues: {
    apiUrl: string;
    timeout: number;
    textFieldType: string;
    textFieldSize: string;
    textFieldColor: string;
    placeholderText: string;
    loadingText1: string;
    loadingText2: string;
    loadingLink: string;
    loadingLinkText: string;
    loadingTextJP1: string;
    loadingLinkJP: string;
    loadingLinkTextJP: string;
    sleepTime: number;
  };
  articleValues: {
    loadingText: string;
    renderDocLink: string;
    linkText: string;
    forMoreInformationText: string;
    pleaseWaitAndReloadText: string;
    loadingTextJP: string;
    defaultImage: string;
    apiUrl: string;
  };
}
