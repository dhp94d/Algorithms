function solution(n) {
    var answer = [];
    const oneTwoFourNotation = [4,1,2];
    while(n > 0){
        answer.unshift(oneTwoFourNotation[n % 3]);
        n = parseInt((n-1)/3);
        
    }
    return answer.join("");
}