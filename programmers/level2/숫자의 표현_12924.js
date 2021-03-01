function solution(n) {
    let count = 0;
    for(let i = 1; i < n+1; i++){
        let sum = 0;
        for(let j = i; j < n+1; j++){
            sum += j;
            if(sum === n){
                count++;
                break;
            }
            if(sum > n) break;
        }
    }
    return count;
}