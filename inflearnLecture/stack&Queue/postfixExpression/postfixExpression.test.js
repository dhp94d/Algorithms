const postfixExpression = require('./postfixExpression');

test("testCase1", () => {
    expect(postfixExpression("3 5 2 + * 9 -")).toBe(12);
  })
  test("testCase2", () => {
    expect(postfixExpression("3 5 2 + * 9 -")).toBe(12);
  })
  test("testCase3", () => {
    expect(postfixExpression("1 2 * 3 2 / + 4 + 4 - 5 + 6 + 6 + 5 + 5 7 * 5 - -")).toBe(-4.5);
  })