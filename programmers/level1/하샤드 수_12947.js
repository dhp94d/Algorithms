function solution(x) {
    var answer = true;
    return x % String(x).split("").map(Number).reduce((acc,cur)=>acc+cur) === 0 ? true : false;
}