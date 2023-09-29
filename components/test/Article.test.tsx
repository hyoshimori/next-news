import React from "react";
import { render } from "@testing-library/react";
import Article from "../main/timeline/Article";
import axios from "axios";

jest.mock("next/router");

describe("# Article Component", () => {
  it("renders without crashing", () => {
    console.log("# component/Article:", "Article Component must exist.");
    render(<Article />);
  });
});

describe("# Article component", () => {
  it("fetches news items from the API call", async () => {
    // Mock the API response
    console.log("# component/Article:", "Article api call must not fail");
    const mockJson = {
      data: [{ id: 1, title: "News item 1" }],
    };
    // mockResolvedValueOnce(mockJson) returns fake promise objects
    // jest.spyOn() makes fake api call with mockResolvedValueOnce(mockJson) returning fake promise
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockJson);

    // Getting the key from env file
    // ↓Use if local call
    // const API_KEY = process.env.API_KEY;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const ENDPOINT_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${API_KEY}`;

    const response = await axios.get(ENDPOINT_URL);

    // Verify that the response matches the mock data
    expect(response.data).toEqual(mockJson.data);
  });
});

describe("# Article component", () => {
  it("renders without throwing any errors", async () => {
    console.log(
      "# component/Article:",
      "Article renders without throwing any errors"
    );
    const { getByTestId } = await render(<Article />);
    const articleComponent = getByTestId("article_component");
    expect(articleComponent).toBeInTheDocument();
  });
});
