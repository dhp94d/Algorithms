function solution(clothes) {
    let cHash = {};
    for(let i of clothes){
        if(cHash[i[1]]){
            cHash[i[1]] += 1
        }else{
            cHash[i[1]] = 2
        }
    }
    return Object.values(cHash).reduce((acc,cur) => acc*cur) - 1;
}