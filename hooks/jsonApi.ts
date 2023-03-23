import axios from 'axios';

export const getCategoryNews = async (category: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.get(`${apiBaseUrl}/${category}`);
  return response.data;
};
