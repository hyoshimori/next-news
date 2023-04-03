export {};
// ↑ This is to explicitly indicate that a module is empty and doesn't export any variables

describe('# Input type testing', ()  => {
  const input = {
    input: "hello world"
  }
  test('All required property must have correct properties', () => {
    console.log('# Input type testing:' ,'required property must have correct properties.');
    // expect.any() method, we pass a constructor function as an argument to specify the type
    expect(input).toHaveProperty('input', expect.any(String))
  })
})
