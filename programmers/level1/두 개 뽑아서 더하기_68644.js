function solution(numbers) {
    const result = new Set();
    const len = numbers.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j <len; j++){
            if(i === j) continue;
            result.add(numbers[i] + numbers[j]);
        }
    }
    return Array.from(result).sort((a,b) => a-b);
}