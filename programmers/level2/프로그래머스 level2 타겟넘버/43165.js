function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (number,sum) => {
        if(number >= numbers.length){
            if(sum === target) answer +=1;
        }else{
            dfs(number+1, sum+numbers[number]);
            dfs(number+1, sum-numbers[number])
        }
    }
    dfs(0,0);
    return answer;
}