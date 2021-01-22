function solution(s) {
    let cnt =0;
    let removeZero = 0;
    
    const toBinary = (number) =>{
        let temp = '';
        while(number !==0){
            temp = (number % 2 +'') + temp;
            number = parseInt(number/2);
        }
        return temp;
    }
    while(s.length !== 1){
        let temp = s.split("").filter((v) => v !== '0');
        let beforeLen = s.length;
        let afterLen = temp.length;
        removeZero += beforeLen - afterLen;
        s = toBinary(afterLen);
        cnt++;
    }
    return [cnt,removeZero];
}