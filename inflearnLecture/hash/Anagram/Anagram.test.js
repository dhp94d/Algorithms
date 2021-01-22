const isAnagram = require("./Anagram");

test("testCase1", () => {
    expect(isAnagram("AbaAeCe\nbaeeACA")).toEqual("YES");
  })
  test("testCase2", () => {
    expect(isAnagram("AbaAeCe\nbaeACA")).toEqual("NO");
  })
  test("testCase3", () => {
    expect(isAnagram("AbaAeCe\nbaeeBCA")).toEqual("NO");
  })
  test("testCase4", () => {
    expect(isAnagram("A\nA")).toEqual("YES");
  })