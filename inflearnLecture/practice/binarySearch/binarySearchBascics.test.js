const binarySearch = require ('./binarySearchBascics');

test("testCase1", () => {
    expect(binarySearch("8 32\n23 87 65 12 57 32 99 81")).toBe(3);
  })
  test("testCase1", () => {
    expect(binarySearch("7 0\n0 0 0 0 0 0 0")).toBe(1);
  })