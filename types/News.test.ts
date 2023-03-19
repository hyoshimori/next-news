import { News } from './News';

describe('News type', () => {
  it('should have the correct properties', () => {
    console.log('# types/News: ', 'Correct properties check.');
    const news: News = {
      articles: [
        {
          source: {
            name: 'forbes',
          },
          id: '123',
          name: 'News Outlet',
          title: 'A new title',
          author: 'John Smith',
          description: 'This is a news article.',
          url: 'https://example.com/article',
          urlToImage: 'https://example.com/image.jpg',
          publishedAt: '2022-03-09T12:34:56Z',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    };

    const article = news.articles[0];

    expect(article.source).toBeDefined();
    expect(article.source.name).toBeDefined();
    expect(article.id).toBeDefined();
    expect(article.name).toBeDefined();
    expect(article.title).toBeDefined();
    expect(article.author).toBeDefined();
    expect(article.description).toBeDefined();
    expect(article.url).toBeDefined();
    expect(article.urlToImage).toBeDefined();
    expect(article.publishedAt).toBeDefined();
    expect(article.content).toBeDefined();
  });
});
