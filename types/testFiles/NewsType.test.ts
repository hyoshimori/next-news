export {};
// ↑ This is to explicitly indicate that a module is empty and doesn't export any variables

describe("# News type testing", () => {
  const NewsType = {
    source: {
      name: "BBC News",
    },
    id: "1234",
    name: "Breaking News",
    title: "Lorem Ipsum",
    byline: "By John Doe",
    abstract: "Lorem ipsum dolor sit amet",
    url: "https://example.com",
    section: "World News",
    published_date: "2022-03-27",
    media: [
      {
        length: 10,
        "media-metadata": [
          {
            url: "https://example.com/image.jpg",
            format: "jpg",
            height: 100,
            width: 100,
          },
        ],
      },
    ],
  };

  test("has all required properties with correct data types", () => {
    console.log(
      "# News type testing",
      "required property must have correct properties."
    );
    expect(NewsType).toHaveProperty("source.name", expect.any(String));
    expect(NewsType).toHaveProperty("id", expect.any(String));
    expect(NewsType).toHaveProperty("name", expect.any(String));
    expect(NewsType).toHaveProperty("title", expect.any(String));
    expect(NewsType).toHaveProperty("byline", expect.any(String));
    expect(NewsType).toHaveProperty("abstract", expect.any(String));
    expect(NewsType).toHaveProperty("url", expect.any(String));
    expect(NewsType).toHaveProperty("section", expect.any(String));
    expect(NewsType).toHaveProperty("published_date", expect.any(String));
    expect(NewsType).toHaveProperty("media", expect.any(Array));
  });
});
