export {};
// ↑ This is to explicitly indicate that a module is empty and doesn't export any variables

describe("# Category type testing", () => {
  const category = {
    MyContext: {
      country: "japan",
      category: "country",
    },
  };
  it("All required property must have correct properties", () => {
    console.log(
      "# Category type testing",
      "required property must have correct properties."
    );
    expect(category).toHaveProperty("MyContext", expect.any(Object));
    expect(category).toHaveProperty("MyContext.country", expect.any(String));
    expect(category).toHaveProperty("MyContext.category", expect.any(String));
  });
});
