function solution(n, t, m, p) {
    let answer = '';
    let length = t * m;
    let tempStr = "";
    let cnt = 0;
    while(tempStr.length <= length){
        tempStr += cnt.toString(n).toUpperCase();
        cnt++;
    }
    tempStr = tempStr.slice(0,length);
    
    answer = tempStr.split("").filter((v,i) => i % m === p-1);
    return answer.join("");
}