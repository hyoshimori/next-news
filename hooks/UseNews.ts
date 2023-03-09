import axios from "axios"

export const useNews = () => {
  // console.log(process.env.NEXT_PUBLIC_API_KEY)
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const instance = axios.create({
    headers: {"Content-Type": "application/json"},
    responseType: 'json',
    baseURL: `https://newsapi.org/v2/everything?q=apple&from=2023-03-06&to=2023-03-06&sortBy=popularity&apiKey=${apiKey}`
  });
  return { axios: instance };
}
