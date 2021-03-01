function solution(n, m) {
    var answer = [];
    
    let gcm = (a,b) => {
        if(b === 0) return a
        return commonMultiple(b, a % b);
    }
    let lcd = (a,b) => a * b / commonMultiple(a,b);
    return [commonMultiple(n,m),LeastCommonDivisor(n,m)]
}