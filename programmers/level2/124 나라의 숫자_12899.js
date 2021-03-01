function solution(n) {
    let answer = "";
    let set124 = [4,1,2];
    const trans124 = (n) => {
        if(n === 0){
            return;
        }
        let temp = n % 3;
        n = parseInt(n/3);
        if(temp === 0){
            n = n-1;
        }
        answer = set124[temp] + answer;
        return trans124(n);
    }
    trans124(n);
    return answer;
}