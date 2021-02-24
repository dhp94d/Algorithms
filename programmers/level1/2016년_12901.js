function solution(a, b) {
    let data = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let daySize = [31,29,31,30,31,30,31,31,30,31,30,31];
    let sum = 0;
    Array.from({length:a-1},(v,i) => sum += daySize[i]);
    let result = sum + b
    return data[result % 7];
    
}