const scoreCalculation = require ('./scoreCalculation');

test("testCase1", () => {
    expect(scoreCalculation("10\n1 0 1 1 1 0 0 1 1 0")).toBe(10);
  })

  test("testCase2", () => {
    expect(scoreCalculation("10\n0 0 0 0 0 0 0 0 0 0")).toBe(0);
  })

  test("testCase3", () => {
    expect(scoreCalculation("10\n1 1 1 1 1 1 1 1 1 1")).toBe(55);
  })