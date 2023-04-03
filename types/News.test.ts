export {};
// ↑ This is to explicitly indicate that a module is empty and doesn't export any variables

describe('# News type testing', () => {
  const news = {
    source: {
      name: 'BBC News',
    },
    id: '1234',
    name: 'Breaking News',
    title: 'Lorem Ipsum',
    byline: 'By John Doe',
    abstract: 'Lorem ipsum dolor sit amet',
    url: 'https://example.com',
    section: 'World News',
    published_date: '2022-03-27',
    media: [
      {
        length: 10,
        'media-metadata': [
          {
            url: 'https://example.com/image.jpg',
            format: 'jpg',
            height: 100,
            width: 100,
          },
        ],
      },
    ],
  };

  test('has all required properties with correct data types', () => {
    console.log('# News type testing' ,'required property must have correct properties.');
    expect(news).toHaveProperty('source.name', expect.any(String));
    expect(news).toHaveProperty('id', expect.any(String));
    expect(news).toHaveProperty('name', expect.any(String));
    expect(news).toHaveProperty('title', expect.any(String));
    expect(news).toHaveProperty('byline', expect.any(String));
    expect(news).toHaveProperty('abstract', expect.any(String));
    expect(news).toHaveProperty('url', expect.any(String));
    expect(news).toHaveProperty('section', expect.any(String));
    expect(news).toHaveProperty('published_date', expect.any(String));
    expect(news).toHaveProperty('media', expect.any(Array));
  });
});
