function solution(genres, plays) {
    let answer = [];
    let temp = {}
    for(let i in genres){
        if(temp[genres[i]]){
            temp[genres[i]][0] += plays[i];
            temp[genres[i]][1].push([plays[i],i]);
        }else{
            temp[genres[i]] = [plays[i],[[plays[i],i]]];
        }
    }
    temp = Object.entries(temp);
    temp.sort((a,b) => {
        return b[1][0] - a[1][0];
    })
    for(let i of temp){
        i[1][1].sort((a,b) => {
            return b[0] - a[0];
        }).filter((v,i) => i < 2).map((v) => answer.push(Number(v[1])));
    }
    return answer;
}