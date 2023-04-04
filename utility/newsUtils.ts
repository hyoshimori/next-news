import * as NewsItemCheckType from "@/types/NewsItemCheck";


// ********** This is used to remove the duplicates in the arr ********** //
// first data as an argument looks like this: {uri: 'nyt://article/1f3a4fbd-9514-5xxxxxxxxxxxxxxxxxxxx', url: 'https://www.nytimes.com/2023/03/31/us/xxxxxxxxxxxxxxxxxxxx', id: 1000xxxxxxxxxx, asset_id: 10000xxxxxxxxxx, source: 'New York Times', …}
// second argument "key" is the url wich looks like this: https://www.nytimes.com/2023/03/31/arts/telxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export const removeDuplicates = (data: NewsItemCheckType.NewsItemCheck[], key: keyof NewsItemCheckType.NewsItemCheck): NewsItemCheckType.NewsItemCheck[] => {
  // ↓ Pick up only the truthy el
  return data.filter((item, index, self) => {
    // ↓ Check if the index of the current el in the loop is the same as the index of the first occurrence of a similar element (based on the key)
    return index === self.findIndex((otherItem) =>
      // OhterItems looks like this: {uri: 'nyt://article/1f3a4fbd-9514-5xxxxxxxxxxxxxxxxxxxx', url: 'https://www.nytimes.com/2023/03/31/us/xxxxxxxxxxxxxxxxxxxx', id: 1000xxxxxxxxxx, asset_id: 10000xxxxxxxxxx, source: 'New York Times', …}
      // OtherItems[key] looks like this: https://www.nytimes.com/2023/03/31/arts/telxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      otherItem[key] === item[key]
    );
  });
};
// ********************************************************************** //
