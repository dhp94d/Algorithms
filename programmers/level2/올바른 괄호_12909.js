function solution(s){
    if(s[0] === ")"){
        return false;
    }
    let answer = 0;
    for(let i of s){
        if(answer < 0) break;
        if(i === "(") answer++;
        else answer--;
    }
    
    return answer === 0 ? true : false;
}