function solution(n, words) {
    let answer = [];
    let wordSets = new Set([words[0]]);
    let length = words.length;
    let cnt = 0;
    console.log(wordSets);
    words.reduce((acc,cur,index) => {
        if(wordSets.has(cur) || acc[acc.length-1] !== cur[0]) answer.push(index+1);
        wordSets.add(cur);
        return acc = cur;
    })
    return answer.length === 0 ? [0,0] : [answer[0] % n === 0 ? n : answer[0] % n, Math.ceil(answer[0] / n)];
}