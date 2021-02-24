function solution(n, m) {
    var answer = [];
    
    let commonMultiple = (a,b) => {
        if(b === 0) return a
        return commonMultiple(b, a % b);
    }
    let LeastCommonDivisor = (a,b) => a * b / commonMultiple(a,b);
    return [commonMultiple(n,m),LeastCommonDivisor(n,m)]
}