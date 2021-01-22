const getDiceData = require ('./diceGame');


test("3\n3 3 6 2 2 2 6 2 5", () => {
    expect(getDiceData("3\n3 3 6\n2 2 2\n6 2 5")).toBe(12000);
  })

  test("test2", () => {
    expect(getDiceData("3\n0 0 0\n0 0 0\n0 0 0")).toBe(10000);
  })

  test("test3", () => {
    expect(getDiceData("3\n0 0 0\n6 6 6\n0 0 0")).toBe(16000);
  })
