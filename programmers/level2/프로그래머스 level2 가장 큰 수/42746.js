function solution(numbers) {
    let answer = numbers.map(c => c +'').sort(function(a,b){return (b+a) - (a+b)}).join("");
    return answer[0] ==='0' ? '0' : answer;
}