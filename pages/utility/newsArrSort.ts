import * as NewsItemCheckType from "@/pages/types/typeFiles/NewsItemCheckType";

export const arrSort = (arr: NewsItemCheckType.NewsItemCheck[]) => {
  // You must return values with either 1 or -1 or 0 for this custom func
  return arr.sort((a, b) => {
    const abstractA = a.abstract.toLowerCase();
    const abstractB = b.abstract.toLowerCase();

    // Return a negative, zero, or positive value based on the comparison
    if (abstractA < abstractB) {
      // in case of -1, the el is to be placed before
      return -1;
    } else if (abstractA > abstractB) {
      // in case of 1, the el is to be placed after
      return 1;
    } else {
      // in case of 0, the order of a and b does not matter
      return 0;
    }
  });
  return;
};

export default arrSort;
