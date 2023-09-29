export interface ArticleContext {
  FooterValues: {
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
  NavValues: {
    aboutLinkText: string;
    aboutLinkHref: string;
    iconMessage: string;
    mainHeading: string;
    menuIconTestId: string;
    backArrowIconTestId: string;
    categoryListTestId: string;
  };
  TrendingValues: {
    trendingText: string;
    trendingColor: string;
  };
  ProgressValues: {
    progressMax: string;
    progressText: string;
  };
  SearchValues: {
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
  ArticleValues: {
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
