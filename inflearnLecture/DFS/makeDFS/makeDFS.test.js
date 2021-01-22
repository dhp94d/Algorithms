const makeDFS = require('./makeDFS');

test("PreOrder", () => {
    expect(makeDFS("PreOrder", 1, 7)).toBe('1245367');
  })
  test("InOrder", () => {
    expect(makeDFS("InOrder", 1, 7)).toBe('4251637');
  })
  test("PostOrder", () => {
    expect(makeDFS("PostOrder", 1, 7)).toBe('4526731');
  })

