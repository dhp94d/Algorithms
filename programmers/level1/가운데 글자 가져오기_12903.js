function solution(s) {
    let mid = Math.floor(s.length/2)-1;
    return s.length % 2 === 0 ? s.slice(mid,mid+2) : s.slice(mid+1,mid+2);
}