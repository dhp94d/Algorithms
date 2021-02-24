function solution(s){
    if(s.length === 0) return true;
    let count = s.split("").reduce((acc,cur) => {
        cur = cur.toUpperCase();
        if(cur === 'P') acc[0]++;
        if(cur === 'Y') acc[1]++;
        return acc;
    },[0,0])
    if(count[0] === count[1]) return true;
    return false;
}