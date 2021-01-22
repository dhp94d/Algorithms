const invertedNumberToPrime = require ('./invertedNumberToPrime');
console.log("첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고 그 다음줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.");

test("5\n32 55 62 3700 250", () => {
    expect(invertedNumberToPrime.invertedNumberToPrime("5\n32 55 62 3700 250")).toBe("23 73");
  })

test("5\n32 7801 9821 3700 250", () => {
    expect(invertedNumberToPrime.invertedNumberToPrime("5\n32 7801 9821 3700 250")).toBe("23 1087 1289 73");
  })

test("5\n775 55 62 356 250", () => {
    expect(invertedNumberToPrime.invertedNumberToPrime("5\n775 55 62 356 250")).toBe("577 653");
  })