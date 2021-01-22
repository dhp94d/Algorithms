function solution(n)
{
    let answer =0;

    while(n>0){
        if(n % 2 !== 0){
            answer += 1;
            n = n - 1;
        }else{
            n = n /2;
        }
    }
    return answer;
}