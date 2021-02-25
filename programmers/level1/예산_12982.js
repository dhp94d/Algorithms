function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => (a-b));
    for(let i of d){
        budget -= i;
        if(budget < 0){
            break;
        }else{
            answer++;
        }
    }
    return answer;
}