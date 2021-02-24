function solution(a, b) {
    let min = Math.min(a,b);
    let result = Array.from({length: Math.abs(a-b)+1}, (v,i) => i+min);
    return result.reduce((acc,cur) => acc+ cur);
}