import React from "react";

import { NewsTimeLine } from "src/assets/components/index";
import { render } from "@testing-library/react";

describe("# NewsTimeLine Component", () => {
  it("renders without crashing", () => {
    console.log(
      "# component/NewsTimeLine:",
      "NewsTimeLine Component must exist."
    );
    render(<NewsTimeLine />);
  });
});
