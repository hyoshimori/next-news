import { render } from "@testing-library/react";
import NavLayout from "../layouts/NavLayout";

jest.mock("next/router");

describe("NavLayout", () => {
  it("renders the Nav component", () => {
    const { container } = render(<NavLayout>test content</NavLayout>);
    expect(container.textContent).toContain("test content");
  });
});
