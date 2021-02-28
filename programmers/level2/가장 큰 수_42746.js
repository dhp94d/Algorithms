function solution(numbers) {
    if(Math.max(...numbers) === 0) return "0";
    return numbers.map(String).sort((a,b) => (b+a) - (a+b)).join("");
}