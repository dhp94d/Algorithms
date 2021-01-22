const transBinary = require('./transBinary');

test("testCase1", () => {
    expect(transBinary("25")).toBe('11001');
  })

  test("testCase2", () => {
    expect(transBinary("456456")).toBe("1101111011100001000");
  })

  test("testCase3", () => {
    expect(transBinary("1")).toBe('1');
  })