import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../main/search/Search";

describe("Search component", () => {
  it("Renders Search compnent", () => {
    console.log(
      "# component/Search:",
      "Search Component must be rendered without errors."
    );
    render(<Search />);
  });
});
