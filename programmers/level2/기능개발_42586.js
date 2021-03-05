function solution(progresses, speeds) {
    var answer = [];
    let day = 1;
    let count = 0;
    while(progresses.length !== 0){
        if(progresses[0] + (speeds[0] * day) >= 100){
            progresses.shift();
            speeds.shift();
            count++;
        }else{
            if(count > 0){
                answer.push(count);
                count = 0;
            }
            day++;
        }
    }
    answer.push(count);
    return answer;
}