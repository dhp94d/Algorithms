function solution(participant, completion) {
    let answer = [];
    participant.sort();
    completion.sort();
    let b = participant.map((v,i) => {
        if(v !== completion[i])
            answer.push(v);
    }
        )
    return answer[0];
}