function solution(numbers, hand) {
    var answer = '';
    let [lp, rp] = [10,12];
    for(let i of numbers){
        if(i === 0) i = 11;
        if(i % 3 === 1){
            answer += "L";
            lp = i;
        }else if(i % 3 === 0 && i !== 0){
            answer += "R";
            rp = i;
        }else{
            let ldif = Math.floor(Math.abs(i - lp) % 3 + Math.abs(i - lp) / 3);
            let rdif = Math.floor(Math.abs(i - rp) % 3 + Math.abs(i - rp) / 3);
            if(ldif === rdif){
               if(hand === "right"){
                   answer += "R";
                   rp = i;
               }else{
                   answer += "L";
                   lp = i;
               }
            }else{
                if(ldif < rdif){
                    answer += "L";
                    lp = i;
                }else{
                    answer += "R";
                    rp =i;
                }
            }
        }
    }
    return answer;
}