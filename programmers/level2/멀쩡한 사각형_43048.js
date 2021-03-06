function solution(w, h) {
    var answer = 1;
    const gcd = (a,b) => {
        if(b === 0) return a;
        return gcd(b, a%b);
    }
    return (w*h) - (w + h - gcd(w,h));
}