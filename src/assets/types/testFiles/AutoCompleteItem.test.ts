export {};
// ↑ This is to explicitly indicate that a module is empty and doesn't export any variables

describe("# Category type testing", () => {
  const autoCompleteItemType = {
    title: "coding",
    url: "localhost:3000",
  };

  test("All required property must have correct properties", () => {
    console.log(
      "# Category type testing",
      "required property must have correct properties."
    );
    expect(autoCompleteItemType).toHaveProperty("title", expect.any(String));
    expect(autoCompleteItemType).toHaveProperty("url", expect.any(String));
  });
});
