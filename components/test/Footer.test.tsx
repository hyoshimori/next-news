import React from "react";

import { Footer } from "@/components/index";
import { render } from "@testing-library/react";

describe("# Footer Component", () => {
  it("renders without crashing", () => {
    console.log("# component/Footer:", "Footer Component must exist.");
    render(<Footer />);
  });
});
