function solution(n) {
    let answer = '수박';
    let tempStr = answer.repeat(Math.ceil(n/2));
    return n % 2 === 0 ? tempStr : tempStr.slice(0,tempStr.length - 1);
}