const sumOfNumbers = require ('./sumOfNumbers');

test("testCase1", () => {
    expect(sumOfNumbers("8 3\n1 2 1 3 1 1 1 2")).toBe(5);
  })
  test("testCase1", () => {
    expect(sumOfNumbers("7 5\n5 6 6 5 6 6 5")).toBe(3);
  })