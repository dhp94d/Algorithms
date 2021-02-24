function solution(s, n) {
    var answer = '';
    for(let v of s){
        let ascii = v.charCodeAt();
        if(ascii > 64 && ascii < 91){
            ascii += n;
            if(ascii > 90){
                ascii = 65 + ascii - 91;
            }
        }
        if(ascii > 96 && ascii < 123){
            ascii += n;
            console.log(ascii);
            if(ascii > 122){
                ascii = 97 + ascii - 123;
            }
        }
        answer += String.fromCharCode(ascii);
    }
    return answer;
}