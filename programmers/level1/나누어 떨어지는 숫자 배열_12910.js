function solution(arr, divisor) {
    let value = arr.filter((v) =>  v % divisor === 0).sort((a,b) => a-b);
    return value.length === 0 ? [-1] : value
}