const setCurriculum = require("./setCurriculum");

test("testCase1", () => {
    expect(setCurriculum("CBA\n3\nCBDAGE\nFGCDAB\nCTSBDEA")).toEqual(["YES","NO","YES"]);
  })
  test("testCase2", () => {
    expect(setCurriculum("AFC\n1\nAFFDCCFF")).toEqual(["YES"]);
  })