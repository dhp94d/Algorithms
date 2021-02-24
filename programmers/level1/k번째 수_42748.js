function solution(array, commands) {
    let answer = commands.map((v) => {
        return array.slice(v[0]-1,v[1]).sort((a,b) => a-b)[v[2]-1];
    })
    return answer;
}