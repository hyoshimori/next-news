import { useNews } from './UseNews';

describe('useNews', () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log('# useNews:', 'Base url must not be undefined');
  it('should create an instance of axios with the correct baseURL', () => {
    const { axios } = useNews();
    expect(axios.defaults.baseURL).toEqual(`https://newsapi.org/v2/everything?q=apple&from=2023-03-06&to=2023-03-06&sortBy=popularity&apiKey=${apiKey}`);
  });
});
