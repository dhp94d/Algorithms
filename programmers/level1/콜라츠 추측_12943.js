function solution(num) {
    let answer = 0;
    const makeCollatz = (num) => {
        if(num === 1){
        }else if(answer >= 500){
            answer = -1;
        }else{
            answer++;
            num = num % 2 === 0 ? num / 2 : num * 3 + 1;
            makeCollatz(num);
        }
    }
    makeCollatz(num);
    return answer;
}