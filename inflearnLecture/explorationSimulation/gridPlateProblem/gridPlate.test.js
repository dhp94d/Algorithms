const gridPlate = require('./gridPlate');

test("testCase1", () => {
    expect(gridPlate("2 4 1 5 3 2 6\n3 5 1 8 7 1 7\n8 3 2 7 1 3 8\n6 1 2 3 2 1 1\n1 3 1 3 5 3 2\n1 1 2 5 6 5 2\n1 2 2 2 2 1 5")).toBe(3);
  })