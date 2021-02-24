function solution(strings, n) {
    strings.sort((a,b) => {
        return a[n] !== b[n] ? (a[n]>b[n])- (a[n]<b[n]) : (a>b) - (a<b);
    });
    return strings;
}