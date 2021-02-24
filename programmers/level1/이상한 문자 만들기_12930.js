function solution(s) {
    return s.split(" ").map((words) => words.split("").map((v,i) => i % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()).join("")).join(" ");
}