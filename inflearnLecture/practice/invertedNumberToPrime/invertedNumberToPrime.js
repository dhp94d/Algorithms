const reverseNum = (getNumber) => getNumber.split("").reverse().join("");

const reverseNum2 = (getNumber) => {
    const result = [];
    for(i of getNumber){
        result.unshift(i);
    }
    return Number(result.join(''));
}

const isPrime = (num) => {
    if(num <2) false;
    for(let i = 2; i*i <= num; i++){
        if( num % i ===0 ){
            return false;
        }
    }
    return num;
}

const invertedNumberToPrime = (inputData) =>{
    let [length,numbers] = inputData.split("\n");
    numbers = numbers.split(" ");
    const result = [];
    Array.from({length:length},(v, i) => {
        if(isPrime(Number(reverseNum(numbers[i])))) result.push(isPrime(Number(reverseNum(numbers[i]))));
    });
    return result.join(" ");
}
exports.invertedNumberToPrime = invertedNumberToPrime;