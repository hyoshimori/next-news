import { News } from './News';

describe('News type', () => {
  it('should have the correct properties', () => {
    console.log('# types/News: ' ,'Correct properties check.');
    const news: News = {
      id: '123',
      name: 'News Outlet',
      author: 'John Smith',
      description: 'This is a news article.',
      url: 'https://example.com/article',
      urlToImage: 'https://example.com/image.jpg',
      publishedAt: '2022-03-09T12:34:56Z',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    expect(news.id).toBeDefined();
    expect(news.name).toBeDefined();
    expect(news.author).toBeDefined();
    expect(news.description).toBeDefined();
    expect(news.url).toBeDefined();
    expect(news.urlToImage).toBeDefined();
    expect(news.publishedAt).toBeDefined();
    expect(news.content).toBeDefined();
  });
});
