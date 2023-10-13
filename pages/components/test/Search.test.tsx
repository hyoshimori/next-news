import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Search } from "@/pages/components/index";

describe("Search component", () => {
  it("Renders Search compnent", () => {
    console.log(
      "# component/Search:",
      "Search Component must be rendered without errors."
    );
    render(<Search />);
  });
});
