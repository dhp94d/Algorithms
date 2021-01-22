function solution(progresses, speeds) {
    const answer = [];
    let check = 0;
    let sum =0;
    
    while(progresses.length !== 0){
        check++;
        let length = progresses.length
        for(let i = 0; i < length; i++){
            if(progresses[0] + speeds[0] * check >= 100){
                sum += 1;
                progresses.shift();
                speeds.shift();
            }else break;
        }
        if(sum){
            answer.push(sum);
            sum = 0;
        }
    }
    return answer;
}

module.exports = solution;