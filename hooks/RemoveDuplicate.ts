export const containsDuplicate = function(url: string) {
  const noDups = new Set(url);
  return url.length !== noDups.size;
};
