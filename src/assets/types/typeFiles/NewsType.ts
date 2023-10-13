export type News = {
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
};
