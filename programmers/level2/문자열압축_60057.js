function solution(s) {
    var answer = 0;
    let min = s.length;
    for(let i = 1; i <= (s.length/2); i++){
        let temp = [];
        let str = ""
        for(let j = 0; j < s.length; j++){
            str += s[j];
            if(str.length === i){
                temp.push(str);
                str = "";
            }
        }
        str && temp.push(str);
        let count = 1;
        let result = "";
        temp.reduce((acc,cur,i) => {
            if(acc === cur){
                count += 1;
                return cur;
            }else{
                if(count !== 1){
                    result += count + acc;
                    count = 1;
                    if(temp.length -1 === i){
                        result += cur;
                    }
                }else{
                    result += acc;
                    if(temp.length -1 === i){
                        result += cur;
                    }
                }
                return cur;
            }
        })
        if(count !== 1) result += count+temp[temp.length-1];
        let len = result.length;
        min = len < min ? len : min
    }
    return min;
}