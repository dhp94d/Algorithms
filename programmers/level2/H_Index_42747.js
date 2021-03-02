function solution(citations) {
    citations.sort((a,b) => a-b).reverse();
    let answer = 0;
    for(let i of citations){
        if(i > answer) answer++;
        else break;
    }
    return answer;
}