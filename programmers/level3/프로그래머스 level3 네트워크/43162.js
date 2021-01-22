function solution(n, computers) {
    let answer = 0;
    const checkArr = new Array(3).fill(false);
    
    const dfs = (number) => {
        if(!computers[number][number]){
            return false;
        }else{
            computers[number][number] = 0;
            for(let i =0; i < n; i++){
                if(computers[number][i]){
                    dfs(i);
                }
            }
        }
    }
    
    for(let i =0; i < n; i ++){
        if(computers[i][i]){
            dfs(i);
            answer++;
        }
    }
    return answer;
}