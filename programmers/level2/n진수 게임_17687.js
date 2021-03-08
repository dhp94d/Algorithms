function solution(n, t, m, p) {
    var answer = '';
    for(let i = 0; i <= t*m; i++){
        answer += i.toString(n);
        if(answer.length > t * m){
            answer = answer.slice(0, t*m);
        }
    }
    return answer.toUpperCase().split("").filter((v,i) => i % m === p-1).join("");
}