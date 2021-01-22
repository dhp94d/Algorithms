function solution(msg) {
    let answer = [];
    const dictionary = new Map();
    let cnt = 27;
    let next = 0;
    for(let i = 1; i < 27; i++){
        dictionary.set(String.fromCharCode(i+64),i);
    }
    if(msg.length === 1){
        return [dictionary.get(msg)];
    }
    msg.split("").reduce((acc,cur) => {
        if(dictionary.has(acc+cur)){
            next = acc + cur
            return next;
        }else{
            answer.push(dictionary.get(acc));
            dictionary.set(acc+cur,cnt);
            cnt++;
            next = cur;
            return next;
        }
    })
    answer.push(dictionary.get(next));
    return answer;
    
}
solution('KAKAO');
solution('TOBEORNOTTOBEORTOBEORNOT');