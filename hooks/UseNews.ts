import axios from "axios";

export const useNews = () => {
  // console.log(process.env.NEXT_PUBLIC_API_KEY)
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const instance = axios.create({
    headers: { "Content-Type": "application/json" },
    responseType: "json",
    baseURL: `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`,
  });
  return { axios: instance };
};
