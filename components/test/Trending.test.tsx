import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Trending } from "@/components/index";

describe("Trending component", () => {
  it("Renders Trending compnent", () => {
    console.log(
      "# component/Trending:",
      "Trending Component must be rendered without errors."
    );
    render(<Trending />);
  });
});
