import { useNews } from "./UseNews";

describe("useNews", () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log("# hooks/useNews:", "Base url must not be undefined.");
  it("should create an instance of axios with the correct baseURL", () => {
    const { axios } = useNews();
    expect(axios.defaults.baseURL).toEqual(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`
    );
  });
});
