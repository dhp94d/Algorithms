function solution(clothes) {
    const clothesHash = {};
    let answer = 1;
    for(let i of clothes){
        clothesHash[i[1]] ? clothesHash[i[1]] = clothesHash[i[1]] + 1 : clothesHash[i[1]] = 2;
    }
    for(let i in clothesHash){
        answer *= clothesHash[i];
    }
    return answer -1;
}