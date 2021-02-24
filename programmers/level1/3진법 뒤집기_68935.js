function solution(n) {
    const reverseInt = n.toString(3).split("").reverse().join("");
    return parseInt(reverseInt,3);
}