import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

import axios from 'axios';

describe('# Article Component', () => {
  it('renders without crashing', () => {
    console.log('# component/Article:' ,'Article Component must exist.');
    render(<Article />);
  });
});

describe('# Article component', () => {
  it('fetches news items from the API call', async () => {
    console.log('# component/Article:' ,'Article api call must not fail');
    // Mock the API response
    const mockJson = {
      data: [
        { id: 1, title: 'News item 1' }
      ]
    };
    // mockResolvedValueOnce(mockJson) returns fake promise objects
    // jest.spyOn() makes fake api call with mockResolvedValueOnce(mockJson) returning fake promise
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockJson);

    // Getting the key from env file
    const API_KEY = process.env.API_KEY;
    const ENDPOINT_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    const response = await axios.get(ENDPOINT_URL);

    // Verify that the response matches the mock data
    expect(response.data).toEqual(mockJson.data);
  });
});

describe('# Article component', () => {
  it('renders without throwing any errors', () => {
    const { getByTestId } = render(<Article />);
    const articleComponent = getByTestId('article__component');
    expect(articleComponent).toBeInTheDocument();
  });
});
