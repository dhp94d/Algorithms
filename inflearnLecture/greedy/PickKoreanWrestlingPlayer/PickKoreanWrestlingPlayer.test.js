const criterionCheck = require('./PickKoreanWrestlingPlayer');

test("testCase1", () => {
    expect(criterionCheck("5\n172 67\n183 65\n180 70\n170 72\n181 60")).toBe(3);
  })
  test("testCase2", () => {
    expect(criterionCheck("5\n180 82\n172 60\n172 70\n170 72\n179 60")).toBe(1);
  })
  test("testCase3", () => {
    expect(criterionCheck("5\n180 80\n180 80\n180 80\n180 80\n180 80")).toBe(5);
  })