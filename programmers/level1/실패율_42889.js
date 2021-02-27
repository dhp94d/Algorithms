function solution(N, stages) {
    let answer = [];
    let arr = Array.from(Array(N+1), (v,i) => [i+1,0]);
    stages.forEach((v) => arr[v-1][1] += 1);
    let sum = arr.reduce((acc,cur) => acc + cur[1],0);
    for(let i = 0; i < arr.length; i++){
        if(arr[i][1] === 0){
            continue;
        }
        let temp = arr[i][1];
        arr[i][1] /= sum;
        sum -= temp;
    }
    arr.pop();
    arr.sort((a,b) => {
        if(a[1] === b[1]){
            return a[0] - b[0];
        }else{
            return b[1] - a[1];
        }
    })
    for(let i of arr){
        answer.push(i[0]);
    }
    return answer;
}