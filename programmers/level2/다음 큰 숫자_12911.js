function solution(n) {
    var answer = 0;
    const count1 = (n) => {
        return n.toString(2).split("").filter((v) => v ==='1').length;
    }
    let len = count1(n);
    for(let i = n+1; i < 1000000; i++){
        if(len === count1(i)){
            answer = i;
            break;
        }
    }
    return answer;
}