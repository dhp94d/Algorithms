function solution(arr) {
    var answer = 0;
    let i = 15;
    
    const commonMultiple = (a,b) => {
        if(b === 0) return a;
        return commonMultiple(b , a % b);
    }
    const leastCommonDivisor = (a,b) => a*b / commonMultiple(a,b);
    
    return arr.reduce((acc,cur) => leastCommonDivisor(acc,cur));
}