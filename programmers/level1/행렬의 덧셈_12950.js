function solution(arr1, arr2) {
    let answer = [];
    arr1.map((r,ri) => {
        let value =r.map((c,ci) => {
            return arr1[ri][ci] + arr2[ri][ci];
            })
        answer.push(value);        
    })
    return answer;
}