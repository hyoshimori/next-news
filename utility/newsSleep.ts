// ms stands for milliseconds
// setTimeout() set a timer which will excute the resolve in n secound later (returns promise object).
export async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
